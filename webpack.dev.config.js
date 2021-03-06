const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.base.config");

config.devtool = "eval";

config.entry.push("webpack-hot-middleware/client");

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.module = {
  loaders: [{
    test: /\.js$/,
    loader: "babel",
    exclude: /(node_modules|_Uploadcare)/,
    query: {
      presets: ["stage-0", "react", "react-hmre"]
    }
  }]
};

module.exports = config;
