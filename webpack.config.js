const path = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { client: ['./client/index.js', './client/styles/main.scss'] },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].bundle.js',
    clean: true,
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@images': path.resolve(__dirname, 'client/assets/images'),
      '@reduxActions': path.resolve(__dirname, 'client/redux/actions.js'),
    },
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: `.env.${process.env.NODE_ENV}`,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
  ],
};
