var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': './src/index.js'
  },
  output: {
    path: path.resolve('./dist/static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!less?sourceMap')
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8'],
    })
  ],
  plugins: [
    new ExtractTextPlugin('[name].css', {
      disable: false,
      allChunks: true,
    })
  ]
};
