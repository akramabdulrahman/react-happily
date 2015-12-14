var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/entry.jsx'
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-async-to-generator']
        }
      }
    ]
  }
};
