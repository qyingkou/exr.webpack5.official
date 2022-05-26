function getComponent() {
  return (
    import("lodash")
      // 之所以需要 default是因为 webpack 4 在导入 CommonJS 模块时，将不再解析为 module.exports 的值，而是为 CommonJS 模块创建一个 artificial namespace 对象
      // 参考：webpack 4: import() and CommonJs
      .then(({ default: _ }) => {
        const element = document.createElement("div");
        element.innerHTML = _.join(["Hello", "webpack"], " ");
        return element;
      })
      .catch((error) => "An error occurred while loading the component")
  );
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
