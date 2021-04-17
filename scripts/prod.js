const express = require('express')
const path = require('path')
const spawn = require('cross-spawn-promise')

module.exports = function startServer(s3Path = '') {
  const app = express()

  const port = 3000
  const publicPath = path.resolve(__dirname, '..', 'build')

  // We point to our static assets
  app.use(`/${s3Path}`, express.static(publicPath))

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'build', 'index.html')
    )
  })

  // And run the server
  // eslint-disable-next-line no-console
  app.listen(port, () =>
    console.log('Server running on port ' + port)
  )

  spawn('opn', [`http://localhost:${port}/${s3Path}`])
}
