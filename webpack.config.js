module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    // had to add this to stop refreshing error
    publicPath: "/",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
    // also added this to stop refreshing error
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};
