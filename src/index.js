import "./styles_home.css";
import "./styles_menu.css";
import "./styles_about.css";
import { loadHome } from "./home.js";
import { createMenu } from "./menu.js";
import { aboutMenu } from "./about.js";

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
});
about.addEventListener("click", (e) => {
  aboutMenu();
});
console.log("please work");
