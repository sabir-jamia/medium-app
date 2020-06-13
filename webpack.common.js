const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
   entry: {
      app: './src/index.js',
   },
   module: {
      rules: [
         { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
      }),
      new CleanWebpackPlugin(),
      // new BundleAnalyzerPlugin(),
      new Webpack.EnvironmentPlugin({
         ...dotenv.config().parsed,
      }),
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
