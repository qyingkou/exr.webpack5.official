import _ from "lodash";
import "./style.css";
import module from "./module.js";

function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // 使用module
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = module;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
