const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  getVersionNumber,
  app,
  srcPath,
  dataDog,
  nextEnvObj,
  googleMapsPlaces,
  KendoCSSPath,
  externals,
} = require('./constants')

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.hbs'),
      title: 'NEXT Trucking',
      appMountId: 'root',
      showOverlay: false,
      filename: 'index.html',
      remoteJsFiles: remoteFiles(app),
      inject: false,
      dataDog,
      nextEnv: nextEnvObj.NEXT_ENV,
      version: getVersionNumber(true),
      externals,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: 'source-map-loader',
        enforce: 'pre', // force it to run before other loaders
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            include: [KendoCSSPath],
            use: [
              // Extract the css in production, or use style-loader in development
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  localIdentName: '[local]_[hash:base64:4]',
                },
              },
            ],
          },
          {
            exclude: [
              path.resolve(
                'node_modules',
                'react-table',
                'react-table.css'
              ),
            ],
            use: [
              // Extract the css in production, or use style-loader in development
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  localIdentName: '[local]_[hash:base64:4]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          // Extract the css in production, or use style-loader in development
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
}

function remoteFiles(app) {
  switch (app) {
    case 'quote':
    case 'dashboard':
    case 'lane':
      return [googleMapsPlaces]
    default:
      return []
  }
}
