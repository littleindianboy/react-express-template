// Webpack Config File
const webpack = require('webpack');
var path = require('path');

// Plugins
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIS_DIR = path.resolve(__dirname, './dist');
var SRC_DIR = path.resolve(__dirname, './src');

var config = {
   resolveLoader: {
      root: path.join(__dirname, 'node_modules')
   },
   entry:[
      'webpack-hot-middleware/client',
      './src/index.js'
  ],
   output: {
      path: DIS_DIR,
      filename: 'bundle.js',
      publicPath: '/'
   },
   devServer: {
      contentBase: SRC_DIR,
      hot: true
   },
   module: {
      loaders: [ {
         test: /\.js?/,
         loader: 'babel-loader',
         exclude: [/node_modules/],
         query: {
            presets: ['react', 'es2015', 'react-hmre', 'stage-3']
         }
      }, {
         test: /\.scss$/,
         loaders: ['style', 'css', 'sass']
      }

      ]
   },
   plugins: [
   // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('/dist/styles/main.css', {
         allChunks: true
     })
   ]

}


module.exports = config;
