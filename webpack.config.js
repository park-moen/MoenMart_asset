const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // router: './router.js',
    // app: './index.js',
    app: path.resolve(__dirname, 'src', 'index.js'),
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file name
      template: './src/index.html', // template file name
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
