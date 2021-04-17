const { resolve } = require('path')
const spawn = require('cross-spawn-promise')

const paths = ['build', 'coverage', 'yarn-error.log']

const fullPaths = paths.map(path =>
  resolve(__dirname, '..', path)
)

spawn('rimraf', fullPaths, {
  stdio: 'inherit',
})
