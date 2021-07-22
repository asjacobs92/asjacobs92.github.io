/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(CommonConfig, {
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '..'),
      verbose: true,
      output: {
        path: 'assets',
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          keep_fnames: true,
        },
        comments: false,
      },
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
});
