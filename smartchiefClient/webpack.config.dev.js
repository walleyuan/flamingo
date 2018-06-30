const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.config.base.js');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function dev() {
  return webpackMerge(commonConfig(true), {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true,
      clientLogLevel: 'warning',
      compress: true,
      contentBase: 'dist/',
      hot: false,
      inline: true,
      port: process.env.PORT || 5000,
      host: '0.0.0.0',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
      disableHostCheck: true,
      quiet: false,
      noInfo: false,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: 3033,
      }),
    ],
  });
};
