const path = require("path");
// 以对象方式引用的，就必须要显示声明
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    module: "./src/module.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
      template: "./src/index.html",
      meta: {},
      // 自定义内容
      myself: {
        name: "qyingkou",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:10].css",
    }),
  ],
  module: {
    rules: [
      // { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // 使用内置 Asset Modules
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      { test: /\.(csv|tsv)$/i, use: ["csv-loader"] },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
