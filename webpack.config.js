const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'out.js',
  },
  plugins: [
    new HardSourceWebpackPlugin(),
  ],
}
