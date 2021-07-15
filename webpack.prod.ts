import path from "path";
import merge from "webpack-merge";
import common from "./webpack.common";

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, "./server/public/dist/"),
    filename: "bundle-[fullhash].js"
  },
});