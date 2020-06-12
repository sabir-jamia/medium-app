const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   module: {
      rules: [
         { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
      ],
   },
   plugins: [
      new Webpack.EnvironmentPlugin({
         NODE_ENV: 'production',
      }),
   ],
});
