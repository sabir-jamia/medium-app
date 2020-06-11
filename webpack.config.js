const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//    .BundleAnalyzerPlugin;
const Webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
   mode: 'production',
   module: {
      rules: [
         { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
      ],
   },
   devServer: {
      port: 9000,
      contentBase: [path.resolve(__dirname, 'dist')],
      writeToDisk: true,
      historyApiFallback: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
      }),
      // new BundleAnalyzerPlugin(),
      new Webpack.EnvironmentPlugin({
         ...dotenv.config().parsed,
         NODE_ENV: 'development',
      }),
   ],
};
