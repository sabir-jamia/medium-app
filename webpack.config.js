const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
   ],
};
