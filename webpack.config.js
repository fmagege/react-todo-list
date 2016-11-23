module.exports = {
  entry: ['./client/client.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // skip any files outside of components
        //include : [
          //path.resolve(__dirname, 'components')
        //],

        // only process .js and/or .jsx
        test: /\.jsx?$/,

        // exclude dir node_modules from processing
        exclude: /node_modules/,

        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  // ONLY USE IN DEV ENV !!!
  devtool: 'inline-source-map'
}
