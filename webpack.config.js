var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {path: __dirname, filename: 'bundle.js'},
  module: {
    loaders: [
      {test: /.(js|jsx)$/,loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
      //{test: /\.scss$/, loader: 'style-loader!sass-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'},
      {test: /\.scss$/, loader: 'style-loader!css-loader?modules=1&localIdentName=[name]--[local]---[hash:base64:5]'},
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  },
};
