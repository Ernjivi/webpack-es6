const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.js/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}