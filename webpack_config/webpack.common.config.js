const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const {
  getVersionNumber,
  app,
  appPath,
  publicPath,
  buildPath,
  libPath,
  yardsPath,
  tripsPath,
  shippersPath,
  equipmentPath,
  accountingPath,
  shipperPortalPath,
  managedCarrierPortalPath,
  reportsPath,
  carriersPath,
  nextEnvObj,
  baseName,
  IconSvgPath,
  ImagePath,
  QuoteImagePath,
  rootPath,
} = require('./constants')

const currentYear = new Date().getFullYear()

const config = {
  entry: {
    index: ['whatwg-fetch', appPath],
  },
  devServer: {
    contentBase: '/',
    port: 5000,
    host: '0.0.0.0',
    hot: true,
    compress: true,
    historyApiFallback: {
      index: `/${app}/index.html`,
    },
  },
  output: {
    publicPath,
    path: buildPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].[id].js',
  },
  resolve: {
    alias: {
      lib: libPath,
      yards: yardsPath,
      trips: tripsPath,
      shippers: shippersPath,
      equipment: equipmentPath,
      accounting: accountingPath,
      'shipper-portal': shipperPortalPath,
      'managed-carrier-portal': managedCarrierPortalPath,
      reports: reportsPath,
      carriers: carriersPath,
    },
    extensions: ['*', '.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        WEBPACK_DEV_SERVER: true,
        ...safelyStringifyObject(nextEnvObj),
      },
      VERSION_STRING: JSON.stringify(getVersionNumber()),
      APP_ID: JSON.stringify(app),
      BASE_NAME: JSON.stringify(baseName),
    }),
    new MomentTimezoneDataPlugin({
      startYear: currentYear - 2,
      endYear: currentYear + 10,
    }),
    new HardSourceWebpackPlugin({
      cacheDirectory: '../node_modules/.cache/hard-source/',
      cachePrune: {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        sizeThreshold: 500 * 1024 * 1024,
      },
      environmentHash: {
        root: rootPath,
        directories: [],
        files: ['yarn.lock', 'inject-config.js'],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(?:ico|gif|(?:pn|jpe?|)g)$/i,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'images/',
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: IconSvgPath,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: '@svgr/webpack',
                options: {
                  babel: false,
                  icon: true,
                },
              },
            ],
          },
          {
            include: [ImagePath, QuoteImagePath],
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          inlineRequires: 'images/',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}

function safelyStringifyObject(envObj) {
  return Object.entries(envObj).reduce(
    (retObj, [key, value]) => {
      retObj[key] = JSON.stringify(value)
      return retObj
    },
    {}
  )
}

if (process.env.ANALYZE) {
  config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
