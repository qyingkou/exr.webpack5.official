### 把依赖的库从每棵 chunk 树中独立（共享）出去

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

### SplitChunksPlugin

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
