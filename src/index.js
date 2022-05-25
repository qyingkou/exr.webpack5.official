import _ from "lodash";
import "./style.css";
import Icon from "./assets/image.jpg";
import data1 from "./assets/data.xml";
import data2 from "./assets/data.csv";
import data3 from "./assets/data.json";
import data4 from "./assets/data.json5";
import data6 from "./assets/data.yaml";
import data5 from "./assets/data.toml";

function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // insert css-class
  element.classList.add("hello");
  // insert image
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // 打印文本资源
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
  console.log(data5);
  console.log(data6);

  return element;
}

document.body.appendChild(component());
