# build a library

webpack 还可以用于打包 JavaScript library。以下指南适用于希望简化打包策略的 library 作者

## 安装依赖

devDependencies，意味着无需用户下载
dependencies，意味着用户必须下载

## 核心配置

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-library.js",
    library: {
      // scriptTag环境中挂载到全局对象上去， window.myLibrary.method
      name: "myLibrary",
      // CommonJS、AMD、scriptTag环境下都可以使用。
      type: "umd",
    },
  },
  // 外部化某些依赖包，防止将它们(packages)打包到库的 bundle 中去
  // 既在运行时(runtime)再去从外部获取这些依赖包(external dependencies)。
  // 站在library的consumer角度，开发者把库的依赖包定性为 peerDependency，consumer要自己去安装，安装库时不会替你去安装。
  externals: [
    {
      lodash: {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_", // 资源加载完毕后挂载到全局对象上去（scriptTag环境）
      },
    },
    /^library123\/.+$/, // 遇到如下方式使用的依赖文件时（import("library123/one")，import("library123/two"...),你得一个一个配置好麻烦，正则就可以很方便。
  ],
};
```

## 添加入口

### 第一种方式，参照 package.json 标准添加 main 入口

```json
{
  "main": "dist/webpack-numbers.js"
}
```

### 第二种方式，使用 ES2015 模块

module 属性应指向一个使用 ES2015 模块语法的脚本，但不包括浏览器或 Node.js 尚不支持的其他语法特性（注：v8 支持的 ECMAScript 语言特性）

```json
{
  "module": "src/index.js"
}
```

## 问题？

如何打包一个经过摇树、压缩、添加 sourcemap 的轻量 npm 包？
代码仓库包含源代码不包含打包文件，我们使用 gitignore 即可，而 npm 包则只包含打包文件不包含源代码怎么做？
