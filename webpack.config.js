const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {}
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: __dirname + '/src/app.js'
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: "body"
    }),
    new LiveReloadPlugin(options),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    // publicPath: "/assets", // New
    filename: "[name].bundle.js"
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'src'),    // New
    // contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    hot: true
  }
};