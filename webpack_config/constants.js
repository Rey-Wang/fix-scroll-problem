const path = require('path')
const {
  getBaseName,
  getVersionNumber,
} = require('../scripts/helpers/git')
const GOOGLE_MAPS_API_KEY = require('../scripts/googleMapsApiKey')
  .GOOGLE_MAPS_API_KEY

const app = process.env.APP
const isProd = process.env.NODE_ENV === 'production'
const nextEnvObj = JSON.parse(process.env.NEXT_ENV_OBJ)
const srcPath = path.resolve(__dirname, '../src')
const libPath = path.join(srcPath, 'lib')
const yardsPath = path.join(srcPath, 'apps', 'yards')
const tripsPath = path.join(srcPath, 'apps', 'trips')
const equipmentPath = path.join(
  srcPath,
  'apps',
  'equipment'
)
const accountingPath = path.join(
  srcPath,
  'apps',
  'accounting'
)
const shippersPath = path.join(srcPath, 'apps', 'shippers')
const shipperPortalPath = path.join(
  srcPath,
  'apps',
  'shipper-portal'
)
const managedCarrierPortalPath = path.join(
  srcPath,
  'apps',
  'managed-carrier-portal'
)
const reportsPath = path.join(srcPath, 'apps', 'reports')
const carriersPath = path.join(srcPath, 'apps', 'carriers')
const baseName = getBaseName(app, isProd)
const buildPath = path.join(__dirname, '../build')
const rootPath = path.join(__dirname, '..')
const publicPath = app.startsWith('landing')
  ? '/'
  : `/${baseName}/`
const appPath = path.resolve(
  srcPath,
  'apps',
  app,
  'app.tsx'
)
const IconSvgPath = path.join(
  libPath,
  'components/Icons/svgs'
)
const ImagePath = path.join(libPath, 'images')
const QuoteImagePath = path.resolve(
  __dirname,
  '../src/apps/quote/images'
)
const googleMapsPlaces = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&language=en-US`
const dataDog = {
  applicationId: nextEnvObj.DATA_DOG__APPLICATION_ID,
  clientToken: nextEnvObj.DATA_DOG__CLIENT_TOKEN,
}
const KendoCSSPath = path.join(
  __dirname,
  '../node_modules/@progress'
)
const externals = [
  'https://unpkg.com/react@^16.9.0/umd/react.production.min.js',
  'https://unpkg.com/react-dom@^16.9.0/umd/react-dom.production.min.js',
]

module.exports = {
  getVersionNumber,
  getBaseName,
  app,
  isProd,
  nextEnvObj,
  srcPath,
  libPath,
  yardsPath,
  tripsPath,
  equipmentPath,
  accountingPath,
  shippersPath,
  shipperPortalPath,
  managedCarrierPortalPath,
  reportsPath,
  carriersPath,
  baseName,
  buildPath,
  publicPath,
  appPath,
  IconSvgPath,
  ImagePath,
  QuoteImagePath,
  googleMapsPlaces,
  dataDog,
  KendoCSSPath,
  externals,
  rootPath,
}
