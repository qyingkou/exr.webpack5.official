# caching

简单说就是空间换时间的场景。
缓存可以简单做也可以复杂做，要从 app 用户可以获得的收益来权衡付出的努力。

## 静态资源的版本设定

webpack 提供了 substitution(可替换模板字符串) 的方式，即通过带括号字符串来模板化文件名。[contenthash]将根据资源内容创建出唯一 hash，当资源内容发生变化时，[contenthash] 也会发生变化。

```js
output: {
    filename: "[name].[contenthash:10].js", // 设定资源版本号
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    // 把经常变化的runtime提出来，剩下部分就有了缓存的可能性了
    runtimeChunk: "single",
  },
```

## 静态资源分分类

把最不容易变化的代码优先指定和提取出来，比如第三方库提取到单独的文件（vendor chunk）中是比较推荐的做法。

```js
optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // 指定来源
          name: "vendors", // 命名
          chunks: "all",
        },
      },
    },
  },
```

## 模块标识符（module identifier）固定版本
