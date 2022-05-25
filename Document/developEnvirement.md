# 开发环境

## 配置

```js
module.exports = {
  // ...
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  // 代码分割：因为该demo有多个入口，不设置可能会报错
  optimization: {
    runtimeChunk: "single",
  },
  // ...
};
```
