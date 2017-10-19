const webpack = require('webpack');
const { resolve } = require('path');


module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './frontend/src/index'
    ]
  },
  output: {
    path: resolve(__dirname, './frontend/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.s?css$/,
        use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }
          ]
      },
      {
        test: /\.html$/,
        use: [ 'file-loader?name=[name].[ext]' ],
        include: /src/
      },
      {
        test: [
            resolve(__dirname, 'frontend/src/pwa/'),
        ],
        use: [ 'file-loader?name=[name].[ext]' ]                
      },
      {
        test: /\.(png|ico|svg|gif)$/,
        use: [ 'url-loader?limit=10000' ],
        include: [
            resolve(__dirname, 'src/images/')
        ]
      }
    ]
  }
}
