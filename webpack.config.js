const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// webpack needs to be explicitly required
const webpack = require('webpack');
var mode = process.env.NODE_ENV || 'development';


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    sourceMapFilename: '[name].[chunckhash:8].map',
    chunkFilename: '[id].[chunkhash:8].js'

    // filename: 'main.js',
    // filename: "[name].js",
    // path: path.resolve(__dirname, 'dist'),
  },
 
  module: {
    rules: [
      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    //global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:3000"
    })
  },
  optimization: {
    splitChunks: {chunks: 'all'},
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
 
  ],
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },

 
};
