const fs = require('fs')
const join = require('path').join

const appsDir = join(__dirname, '../../src/apps/')

module.exports = fs
  .readdirSync(appsDir)
  .filter(item =>
    fs.statSync(join(appsDir, item)).isDirectory()
  )
