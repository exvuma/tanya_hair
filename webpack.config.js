const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {}
module.exports = {
  // context: path.resolve(__dirname, "src"),
  entry: {
    // app: __dirname + '/src/app.js'
    client: path.join(__dirname, './src/app.js'),
    worker: path.join(__dirname, './src/worker.js'),
  },
  devtool: "none",// to get worker preview to actually fucking work"source-map",
  // devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      // filename: "src/index.html",
      favicon:"src/favico.ico",
      template: "src/index.html",
      inject: "body"
    }),
    new LiveReloadPlugin(options),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    // publicPath: "/assets", // New
  },
  mode: "production",//"development",
  devServer: {
    // contentBase: path.resolve(__dirname, 'src'),    // New
    // contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    hot: false
  },
  resolve: {
    alias: {
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    },
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        loader: 'raw-loader',
      },
    ]
  }
};