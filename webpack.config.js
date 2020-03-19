const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = env => {
  return {
    mode: env.NODE_ENV || 'development',
    devtool: 'source-map',
    entry: {
      'dou-fn': './browser.js',
      'dou-fn.min': './browser.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js'
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          include: /\.min\.js$/
        })
      ]
    }
  }
}
