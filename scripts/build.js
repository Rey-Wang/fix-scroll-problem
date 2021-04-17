const chalk = require('chalk')
const spawn = require('cross-spawn-promise')
const checkDependencies = require('./helpers/checkDependencies')

const Prompt = require('./helpers/prompt.js')

const startServer = require('./prod')

process.env.NODE_ENV = 'production'
;(async () => {
  const prompt = new Prompt()
  const app = await prompt.chooseApp(
    process.env.APP || process.argv[2]
  )
  const env = await prompt.chooseEnv(
    app,
    process.env.NEXT_ENV ||
      process.argv[3] ||
      process.env.ENV
  )
  prompt.done()

  // eslint-disable-next-line no-console
  console.log(`Building app: ${chalk.cyan(app)}\n`)

  if (
    !process.env.START_PROD_SERVER ||
    process.argv.includes('--build')
  ) {
    // ensure we install to be up to date
    await checkDependencies()

    await spawn('webpack', [], {
      env: {
        ...process.env,
        APP: app,
        NEXT_ENV_OBJ: JSON.stringify(env),
        NODE_ENV: 'production',
      },
      stdio: 'inherit',
    })
  }

  if (process.env.START_PROD_SERVER) {
    startServer(app)
  }
})()
