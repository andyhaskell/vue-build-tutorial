const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './app/app.js',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },
  plugins: [ new VueLoaderPlugin() ],

  mode: 'development',
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 1123
  }
}