import "./styles_home.css";
import "./styles_menu.css";
import { loadHome } from "./home.js";
import { createMenu } from "./menu.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const logo = document.getElementById("logo");
loadHome();
home.classList.add("active");

home.addEventListener("click", () => {
  loadHome();
});
logo.addEventListener("click", () => {
  loadHome();
});
menu.addEventListener("click", (e) => {
  createMenu();

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
      // switch (e.target.id) {
      //   case "sides":
      //     loadSideMenu();
      //     break;
      //   case "the_main_event":
      //     loadMainDishesMenu();
      //     break;
      //   case "drinks":
      //     loadDrinksMenu();
      //     break;
      // }
    }
  });
});
