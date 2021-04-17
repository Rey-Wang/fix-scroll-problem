const commConfig = require('./webpack_config/webpack.common.config')
const developmentConfig = require('./webpack_config/webpack.dev.config.js')
const productionConfig = require('./webpack_config/webpack.prod.config')
const merge = require('webpack-merge').merge

const isProd = process.env.NODE_ENV === 'production'

if (!process.env.APP)
  throw new Error('App to build not defined!')

module.exports = merge(
  commConfig,
  isProd ? productionConfig : developmentConfig
)
