/* eslint-disable no-console */
const spawn = require('cross-spawn-promise')
const chalk = require('chalk')

// Checks if your dependencies are up to date using a special yarn command.
module.exports = async function checkDependencies() {
  return spawn('yarn', ['check', '--verify-tree'], {
    env: process.env,
    stdio: 'ignore',
  }).catch(() => {
    console.log(
      chalk.red('DEPENDENCIES ARE OUT OF DATE!!!')
    )
    console.log(
      `${chalk.red('Run')} ${chalk.cyan(
        '"yarn install"'
      )} ${chalk.red('to fix it!')}`
    )
    process.exit(1)
  })
}
