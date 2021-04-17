const moment = require('moment')
const proc = require('child_process')

function getVersionNumber(hashOnly) {
  // This gets the circle CI build number, or "noci" if we aren't running on circle-ci
  const ci = process.env.CIRCLE_BUILD_NUM !== undefined
  const buildNumber = ci
    ? `B${process.env.CIRCLE_BUILD_NUM}`
    : 'NB'

  // Get the first 8 chars of the git commit hash
  const gitHash =
    'G' +
    (ci
      ? `${process.env.CIRCLE_SHA1}`
      : proc
          .execSync('git rev-parse HEAD')
          .toString()
          .trim()
    ).substring(0, 8)

  if (hashOnly) {
    return gitHash.substring(1)
  }

  const now = moment()

  return `${now.format(
    'MMM. Do YYYY h:mma'
  )} ${buildNumber} ${gitHash}`
}

function getBaseName(appId, isProd) {
  // For non-prod builds the base name is the `appId`
  // so that the index.html is built correctly, the public path
  // lacks the feature branch path, etc.
  if (!isProd) {
    return appId
  }

  const branch = proc
    .execSync('git symbolic-ref --short HEAD')
    .toString()
    .trim()

  // For feature branches we deploy the app to a subdirectory.
  // This allows for testing & reviewing the changes live
  // before merging to master.
  if (branch !== 'master') {
    return `${appId}/feature-branch/${branch.replace(
      /[^a-z0-9\-_]/gi,
      '_'
    )}`
  } else {
    return appId
  }
}

module.exports = {
  getBaseName,
  getVersionNumber,
}
