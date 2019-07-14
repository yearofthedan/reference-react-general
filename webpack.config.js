const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require("webpack");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getClientEnvironment = require('./config/env');
const env = getClientEnvironment();

const isEnvProduction = process.env.NODE_ENV === 'production';
const config = {
  entry: './src/index.jsx',
  mode: process.env.NODE_ENV || 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/, use: [{ loader: "html-loader" }]
      }
    ]
  },
  devtool: isEnvProduction ? 'false' : 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

if (process.env.BUNDLE_ANALYSE === 'true') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
