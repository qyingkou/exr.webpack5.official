# 多入口配置

```sh
npm install --save-dev html-webpack-plugin
```

```js
module.exports = {
  // 多入口
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 每次build时自动清除垃圾
  },
  // 动态插入output中配置的资源到html文档
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:10].css",
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      // ...
    ],
  },
};
```
