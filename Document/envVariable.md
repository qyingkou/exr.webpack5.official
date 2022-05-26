# 环境变量

webpack CLI 提供一些你可以在 webpack 配置中访问的内建环境变量。
以及你自己可以自定义环境变量到 env 上去。
前提是你要把配置改为函数形式，形参是 env。

```js
// package.json
{
  "scripts": {
    "build": "webpack --env abcd=1234"
  },
}
// webpack.config.js
module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log(env.abcd); // 1234

  return {
    // your config content
  };
};
```

你也可以使用 --node-env 选项来设置 process.env.NODE_ENV

```sh
--node-env production # process.env.NODE_ENV = 'production'
```
