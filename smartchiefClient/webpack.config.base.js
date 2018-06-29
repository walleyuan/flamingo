const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = function base(isDebug) {
  return {
    context: path.resolve(__dirname, './src'),
    output: {
      path: `${__dirname}/dist`,
      filename: isDebug ? 'bundle.js' : '[name].[hash].js',
      publicPath: '/',
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: { // NOTE: if you add a new alias be sure to also update .babelrc
        components: path.resolve('./src/components'),
      },
      modules: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, 'src'),
      ],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          include: [path.join(__dirname, 'src')],
          options: {
            cacheDirectory: isDebug,
            babelrc: true,
          },
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/,
          loader: extractSass.extract({
            use: [{
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
            }],
            // use style-loader in development
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name() {
              if (process.env.NODE_ENV === 'development') {
                return '[path][name].[ext]';
              }

              return '[hash].[ext]';
            },
            outputPath: 'images/',
          },
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream',
        },
      ],
    },
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        inject: true,
      }),
      extractSass,
    ],
  };
};
