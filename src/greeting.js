import { append } from "./domUtils.js";
import ramenImage from "./assets/ramen.jpg";

const loadHome = () => {
  console.log("Hello home Page");

  const content = document.getElementById("content");
  content.innerHTML = "";

  const heroDiv = append(content, "div", {
    className: "hero",
  });

  append(heroDiv, "img", {
    className: "img_ramen",
    src: ramenImage,
  });
  append(heroDiv, "p", {
    className: "h1",
    text: "from bowl to soul. hart warming food seasonal and fresh",
  });

  const wrapInfo = append(content, "div", { className: "wrap" });
  const openingDiv = append(wrapInfo, "div", { className: "opening" });
  append(openingDiv, "p", { text: "Opening hours" });
};

const greeting = "Hello, Odinite";

export { greeting, loadHome };
