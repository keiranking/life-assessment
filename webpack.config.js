const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/assets/javascripts/index.js',
    vendor: './src/assets/javascripts/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'I got titled by Webpack',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new CopyWebpackPlugin([{
      from:'./src/assets/images',
      to:'assets/images'
    }]),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};
