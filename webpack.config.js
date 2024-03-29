const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// webpack needs to be explicitly required
const webpack = require('webpack')


module.exports = {
  entry: './src/index.js',
  output: {
    // filename: 'main.js',
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
  },
 
  mode: 'development',
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
};
