var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle:["./src/app.js"]
  },
  output: {
    path: __dirname,
    publicPath:"/",
    filename: 'dist/[name].js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.js$/, loader: 'babel',exclude:/node_modules/,
        query:{
          presets:['es2015']
        } 
      }
    ]
  },
  resolve:{

  },
  vue: {
    loaders: {
      sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader'),
    },
  },
  plugins: [
    new ExtractTextPlugin('./src/css/style.css', {
      allChunks: true
    })
  ]
}
