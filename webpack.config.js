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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  devtool: 'eval',

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
    },
    {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: 'file-loader?[name].[ext]&outputPath=images/',
    }],
  },
  plugins: [HtmlWebpackPluginConfig],
};
