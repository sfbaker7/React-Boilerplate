const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  context: __dirname + '/client',
  entry: {
    app: 'webpack-dev-server/client?http://localhost:8080',
    javascript: ['./index.js'],
    css: ['./scss/base.scss'],
  },

  output: {
    filename: '[name].js',
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'react-hot-loader',
      }, {
        loader: 'babel-loader',
      }],
      exclude: /node_modules/,
    },
    {
      test: /\.(css|scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      }, {
        loader: 'postcss-loader',
      }],
    }],
  },
  plugins: [HtmlWebpackPluginConfig],
};
