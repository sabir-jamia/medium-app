const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//    .BundleAnalyzerPlugin;
const Webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
   mode: process.env.NODE_ENV,
   module: {
      rules: [
         { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
         {
            test: /\.mdx$/,
            exclude: /(node_modules)/,
            use: ['babel-loader', '@mdx-js/loader'],
         },
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
