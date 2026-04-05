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
  console.log(menus.target);
  const titles = document.querySelectorAll(".title");
  titles.forEach((title, e) => {
    title.addEventListener("click", (e) => {
      titles.forEach((title) => {
        title.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
});
