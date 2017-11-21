const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'out.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-es2015-modules-commonjs'],
          },
        },
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
  ],
}
