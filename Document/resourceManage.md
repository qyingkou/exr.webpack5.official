# 配置起步

## 创建配置文件

webpack.config.js

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

## 管理资源

资源会默认被打包到 dist 文件夹中
数据格式的资源默认被打包进 js 而不会分离出来，比如 json、csv、xml 等

```sh
npm install --save-dev style-loader css-loader
npm install --save-dev csv-loader xml-loader
npm install --save-dev toml yamljs json5
```

webpack.config.js

```json
module: {
    rules: [
      test:/正则表达式/,
      use:[] | "" // "asset/resource" 内置的资源解析
    ]
}
```

注意点：配置中若写成对象形式的需要引入该 loader，而写成字符串形式的无需引入。
