/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const config = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
  }
};

if(process.env.NODE_ENV === 'development') {
  config.devtool = 'source-map';
  config.devServer = {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    hot: true
  };
}

module.exports = config;
