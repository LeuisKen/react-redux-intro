var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': './index.js'
  },
  output: {
    path: path.resolve('./dist/static'),
    filename: '[name].[chunkhash].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      'SRC': __dirname + '/src'
    }
  },
  module: {
    "loaders": [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml',
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loader: "url-loader?mimetype=image/png"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        // loader: 'style!css?sourceMap!autoprefixer-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        // loader: 'style!css?sourceMap!autoprefixer-loader',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css', {
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.tmpl'),
        inject: true,
        hash: false,
        // 相对于`config.output.path`的路径
        filename: '../index.html',
        minify: false,
        favicon: false,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    })

  ]
};
