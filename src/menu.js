import { append } from "./domUtils.js";
const categories = ["sides", "the main event", "drinks"];
const createMenu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML = `
  <div class="hero">
        <h1>menu</h1>
        <p>our delicious menu is here</p>
        <div class="line"></div>
      </div>
       <div class="menu"></div>
     <div class="cards"></div>
`;
  const menuDiv = content.querySelector(".menu");
  categories.forEach((cat, index) => {
    const tab = append(menuDiv, "p", {
      className: "title",
      text: cat,
    });
    if (index === 0) tab.classList.add("active");
  });
};

export { createMenu };
