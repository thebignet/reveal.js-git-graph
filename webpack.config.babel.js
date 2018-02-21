const webpack = require("webpack");
const path = require("path");

const config = {
  target: 'web',
  entry: {
    'git-graph': './git-graph.js'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        parser: {
          amd: false
        },
        include: /node_modules\/lodash\// // https://github.com/lodash/lodash/issues/3052
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}

export default config
