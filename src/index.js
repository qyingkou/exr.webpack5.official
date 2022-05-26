import module from "./module.js";

async function getComponent() {
  // 使用webpack的内置指令：webpackPrefetch，webpackPreload
  const { default: _ } = await import(/* webpackPrefetch: true */ "lodash"); // !
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  console.log(_.join(["---"]));
  return element;
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
