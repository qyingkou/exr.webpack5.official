const path = require("path");
// 以对象方式引用的，就必须要显示声明
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash:6].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    // 确定算法，使得更少的文件hash值产生变化（有益缓存策略）。https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids
    moduleIds: "deterministic",
    // 提取引导模板(extracting boilerplate)
    runtimeChunk: "single",
    // 提取不太会变的模块
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development mode",
      template: "./src/index.html",
      meta: {},
      // 自定义内容
      myself: {
        name: "qyingkou",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:6].css",
    }),
  ],
  module: {
    rules: [
      // { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
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
