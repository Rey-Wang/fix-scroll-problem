/* eslint-disable no-console */
const spawn = require('cross-spawn-promise')
const checkDependencies = require('./helpers/checkDependencies')

const JEST_FEATURES = [
  'lint',
  'eslint',
  'stylelint',
  'unit',
]

// If ANY of these 'special' features are provided, only those run.
// If none are provided, all of them run.
const SPECIAL_FEATURES = [...JEST_FEATURES, 'typescript']

const ALL_FEATURES = [...SPECIAL_FEATURES, 'nocoverage']

;(async () => {
  try {
    process.env.task = 'test'
    // grab the 3rd+ argument from the command line (0 is node, 1 is test.js)
    const [, , ...rawArgs] = process.argv

    // Don't wait on the response, let this run in parallel and wait later if needed
    const checkDepsPromise = checkDependencies()

    const features = rawArgs.filter(arg =>
      ALL_FEATURES.includes(arg)
    )
    const specialFeatures = features.filter(feature =>
      SPECIAL_FEATURES.includes(feature)
    )
    const jestFeatures = features.filter(feature =>
      JEST_FEATURES.includes(feature)
    )

    // `allFeatures` is true if none of the "specialFeatures" are provided, false otherwise.
    const allFeatures = !specialFeatures.length

    // `args` is the remainder of all arguments after any features have been filtered out.
    const args = rawArgs
      .filter(arg => !ALL_FEATURES.includes(arg))
      .concat(process.env.CI ? ['--maxWorkers=3'] : [])

    if (allFeatures || features.includes('typescript')) {
      console.log('Running TypeScript...')
      await spawn('tsc', ['--project', './tsconfig.json'], {
        stdio: 'inherit',
      })
      console.log('TypeScript passed')
    }

    if (allFeatures || jestFeatures.length) {
      await spawn('jest', args, {
        env: {
          ...process.env,
          // Limit the heap size of the jest workers to avoid running into memory issues in CCI.
          NODE_OPTIONS: '--max_old_space_size=750',
          // Ensure consistent results for any tests that involve rendering timestamps in local time
          TZ: 'America/Los_Angeles',
          // I know this block is ugly, but it's the least complicated way to pass all this information...
          COVERAGE: features.includes('nocoverage')
            ? 'dontrun'
            : 'run',
          ESLINT:
            allFeatures ||
            features.includes('lint') ||
            features.includes('eslint')
              ? 'run'
              : 'dontrun',
          STYLELINT:
            allFeatures ||
            features.includes('lint') ||
            features.includes('stylelint')
              ? 'run'
              : 'dontrun',
          UNIT:
            allFeatures || features.includes('unit')
              ? 'run'
              : 'dontrun',
        },
        stdio: 'inherit',
      })
    }

    await checkDepsPromise
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
