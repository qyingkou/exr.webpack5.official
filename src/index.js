async function getComponent() {
  // 使用webpack的内置指令：webpackPrefetch，webpackPreload
  const { default: _ } = await import(/* webpackPrefetch: true */ "lodash"); // !
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
