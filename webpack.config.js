var path = require("path");
var webpack = require("webpack");

module.exports = {
  cache: true,
  context: path.join(__dirname, "client"),
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    // Uglify to remove node code paths.
    new webpack.optimize.UglifyJsPlugin({
      // NOTE: Beautify the resuling minimized file to see results.
      beautify: true
    }),

    // Signal webpack, not node.
    new webpack.DefinePlugin({
      "process.env.IS_WEBPACK": JSON.stringify(true)
    })
  ]
};
