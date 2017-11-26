module.exports = {
  devtool: 'source-map',
  entry: './js/main.js',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }]
  },
  output: {
    filename: './dist/js/app.js'
  }
}
