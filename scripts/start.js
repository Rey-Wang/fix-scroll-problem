const chalk = require('chalk')
const spawn = require('cross-spawn-promise')

const Prompt = require('./helpers/prompt.js')

;(async function () {
  const help = chalk`
  **********************************************************************************
    {cyan \`yarn start\`} accepts command line arguments in the form {cyan \`yarn start [APP] [ENV]\`}
    Examples: {cyan \`yarn start trips\`} or {cyan \`yarn start trips development\`}
  **********************************************************************************`
  console.log(help.substring(1))

  const prompt = new Prompt()
  const app = await prompt.chooseApp(
    process.env.APP || process.argv[2]
  )
  const env = await prompt.chooseEnv(
    app,
    process.env.NEXT_ENV || process.argv[3]
  )
  prompt.done()

  // eslint-disable-next-line no-console
  console.log(`Starting app: ${chalk.cyan(app)}\n`)

  spawn(
    'webpack-dev-server',
    ['--progress', '--colors', '--inline'],
    {
      env: {
        ...process.env,
        APP: app,
        NEXT_ENV_OBJ: JSON.stringify(env),
        NODE_ENV: 'development',
      },
      stdio: 'inherit',
    }
  )
    .then(stdout => {
      console.info('Success!')
    })
    .catch(error => {
      console.error('Failed!', error)
    })

  spawn('open-cli', [`http://localhost:5000/${app}/`])
    .then(stdout => {
      console.info('Success open site!')
    })
    .catch(error => {
      console.error('Failed!', error)
    })
})()
