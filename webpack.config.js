module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: './app.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.html']
  }
};
