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
        test: /\.html$/, loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js$/, loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.html', '.jpg', '.png']
  }
};
