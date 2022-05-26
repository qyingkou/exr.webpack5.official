# 代码分离

## 把依赖的库从每棵 chunk 树中独立（共享）出去

起到库文件的去重作用，如果你只想把库文件去重的话

```js
// webpack.config.js
 entry: {
    main: { import: "./src/index.js", dependOn: "lodash" },
    module: { import: "./src/module.js", dependOn: "lodash" },
    lodash: "lodash",
  },
  // 代码分割：防止出现同一模块的多个实例，保证唯一性
  optimization: {
    runtimeChunk: "single",
  },
```

## SplitChunksPlugin 寻找和抽离重复的模块

将公共的依赖模块提取到指定 chunk 中去,比较通用

```js
// webapck.config.js
entry: {
  main: "./src/index.js",
  module: "./src/module.js",
},
optimization: {
  splitChunks: {
    chunks: "all",
  },
},
```

## 动态导入(dynamic import)

拆分动态导入的代码时，webpack 提供了 2 种方法：
1，import()语法，Ecma 标准，推荐（内部会用到 promise，需要浏览器支持）
2，require.ensure，webpack 遗留的方法

内置指令学习：

- 预获取模块

```js
// 会以<link rel="prefetch" href="xxx.js"> 方式并追加到页面头部，指示着浏览器在闲置时间预取 xxx .js文件。
import(/* webpackPrefetch: true */ "./path/to/modal.js");
```

- 预加载模块

```js
import(/* webpackPrefetch: true */ "./path/to/modal.js");
```

prefetch 指令和 preload 指令的不同之处：

- preload chunk 会在父 chunk 加载时，以并行方式开始加载。
而 prefetch chunk 会在父 chunk 加载结束后开始加载。

- preload chunk 具有中等优先级，并立即下载。
而 prefetch chunk 在浏览器闲置时下载。

- preload chunk 会在父 chunk 中立即请求，用于当下时刻。
而 prefetch chunk 会用于未来的某个时刻。

- 浏览器支持程度不同。
