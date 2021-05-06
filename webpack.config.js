const path = require("path");

const sourcePath = path.resolve(__dirname, "./src");

module.exports = env => ({
  mode: "development",
  entry: path.join(sourcePath, "initialize.js"),
  output: {
    filename: "Strategy.js"
  },
  module: {
    rules: [
      {
        include: sourcePath,
        exclude: ["/node_modules"],
        loader: "babel-loader"
      }
    ]
  },
  target: "node",
  resolve: {
    modules: [sourcePath, "node_modules"],
    alias: {
      duckScript: path.resolve(__dirname, "src", "duck", env.PLATFORM)
    },
    extensions: [".json", ".js"]
  },
  devtool: "source-map"
});
