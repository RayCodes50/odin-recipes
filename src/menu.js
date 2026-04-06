import { append, createCard } from "./domUtils.js";
import { createSides } from "./menu_sides.js";
const categories = ["sides", "the_main_event", "drinks"];
const createMenu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML = `
  <div class="hero">
        <h2>menu</h2>
        <p>our delicious menu is here</p>
        <div class="line"></div>
      </div>
       <div class="menu"></div>
       <div class="wrapSides"></div>

`;
  const wrap = content.querySelector(".wrapSides");
  wrap.appendChild(createSides());
  createTabulation();
  switchMenu(wrap);
};

export { createMenu };

function createTabulation() {
  // creates menu tabulation
  const menuDiv = content.querySelector(".menu");
  categories.forEach((cat, index) => {
    const tab = append(menuDiv, "p", {
      className: "title",
      text: cat.split("_").join(" "),
      id: cat,
    });
    if (index === 0) tab.classList.add("active");
  });
}

function switchMenu(wrap) {
  // create highligh and generate menu
  const menus = document.querySelector(".menu");
  menus.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    if (e.target.classList.contains("title")) {
      console.log(e.target.id);
      const titles = document.querySelectorAll(".title");
      titles.forEach((title) => title.classList.remove("active"));

      e.target.classList.add("active");

      // logic for more menus
      switch (e.target.id) {
        case "sides":
          wrap.innerHTML = "";
          wrap.appendChild(createSides());

          break;
        // case "the_main_event":
        //   loadMainDishesMenu();
        //   break;
        // case "drinks":
        //   loadDrinksMenu();
        //   break;
      }
    }
  });
}
