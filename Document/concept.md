# 概念

## 核心

javascript 模块  
webpack 模块  

入口(entry): 依赖图(dependency graph) 的树根，默认值是 ./src/index.js

输出(output): bundle 输出到哪里，默认值是 ./dist/main.js

loader: 识别不同的文件类型。webpack 内置 JSON 和 JavaScript 解析引擎，用户可以扩展其他文件类型的解析模块。遇到没有指定的文件类型时会尝试使用 js 引擎来解析。

插件(plugin): 扩展能力。  
模式(mode): 优化模式。可选('none','development','production'(默认)

浏览器兼容性(browser compatibility): 支持 ES5 标准的浏览器（即 IE8-）。若要支持旧版本浏览器，需要加载 polyfill。

环境(environment): 运行于 nodejs 运行时，注意支持的版本。
