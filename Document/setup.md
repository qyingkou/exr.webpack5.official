# project init

## setup

```sh
npm init -y
// 本地安装webpack三件套
npm install --save-dev webpack webpack-cli  webpack-dev-server
```

设置 package.json

```json
// 删除main入口
"private":true //防止意外发布
// 脚本
"scripts": {
  "build": "webpack"
},
```

创建测试文件（夹）并测试打包

```dir
/dist/index.html
/src/index.js
// 测试打包
npm run build
```
