import { append } from "./domUtils.js";
import ramenImage from "./assets/ramen.webp";
import locationImage from "./assets/map.jpg";

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
  const ulOpen = append(openingDiv, "ul");
  const openingHours = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
    "9 - 22",
    "9 - 22",
    "9 - 22",
    "9 - 22",
    "9 - 22",
    "9 - 23",
    "9 - 20",
  ];
  openingHours.forEach((li) => {
    append(ulOpen, "li", { text: li });
  });
  const locationDiv = append(wrapInfo, "div");
  append(locationDiv, "img", {
    className: "img_loc",
    src: locationImage,
  });
  const locDetails = append(locationDiv, "div");
  append(locDetails, "p", { text: "Location" });
  append(locDetails, "p", { text: "Your mamas bedroom" });
};

const greeting = "Hello, Odinite";

export { greeting, loadHome };
