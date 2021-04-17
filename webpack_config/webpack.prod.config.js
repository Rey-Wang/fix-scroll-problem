const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin')
  .default
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const CssTreeShakingPlugin = require('webpack-css-treeshaking-plugin')
const {
  getVersionNumber,
  srcPath,
  libPath,
  buildPath,
  app,
  dataDog,
  nextEnvObj,
  KendoCSSPath,
  googleMapsPlaces,
  externals,
} = require('./constants')
module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../'),
      dry: false,
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, '../build'),
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.hbs'),
      title: 'NEXT Trucking',
      appMountId: 'root',
      showOverlay: true,
      filename: 'index.html',
      remoteJsFiles: remoteFiles(app),
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        quoteCharacter: '"',
      },
      dataDog,
      nextEnv: nextEnvObj.NEXT_ENV,
      version: getVersionNumber(true),
      externals,
    }),
    new ImageminPlugin({
      test: /\.(?:ico|gif|(?:pn|jpe?|sv)g)$/i,
      externalImages: {
        context: 'src/lib',
        sources: [
          path.join(libPath, 'images', 'favicon.ico'),
        ],
        destination: path.join(buildPath),
      },
      svgo: {
        plugins: [
          { removeTitle: true },
          { convertColors: { shorthex: false } },
          { convertPathData: false },
          { removeViewBox: false },
        ],
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true,
      uglifyOptions: {
        mangle: {
          safari10: true,
        },
        compress: {
          warnings: false,
          drop_console: true,
          inline: 1,
        },
      },
    }),
    // new CssTreeShakingPlugin({
    //   remove: true,
    // }),
    new OptimizeCssAssetsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: undefined,
        use: 'source-map-loader',
        enforce: 'pre', // force it to run before other loaders
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            include: [KendoCSSPath],
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  localIdentName: '[hash:base64:10]',
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
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  localIdentName: '[hash:base64:10]',
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
          MiniCssExtractPlugin.loader,
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
  mode: 'production',
  devtool: 'cheap-module-source-map',
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
