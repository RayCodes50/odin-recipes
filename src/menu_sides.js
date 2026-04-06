import imgEdamame from "./assets/menu/edamame.png";
import imgCauliflower from "./assets/menu/bang_bang_cauliflower_.png";
import imgGyoza from "./assets/menu/green-yasai-gyoza-web-image-750x750px.png";
import { append, createCard } from "./domUtils.js";

const sidesMenu = [
  {
    dishName: "edamame with chilli + garlic salt",
    dishDes: "beans with chilli + garlic salt",
    dishKcal: 287,
    dishImg: imgEdamame,
    dishNew: true,
    dishVegan: true,
    dishVege: true,
  },
  {
    dishName: "yasai | vegetable",
    dishDes: "steamed. spiced vinegar sauce",
    dishKcal: 208,
    dishImg: imgGyoza,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
  {
    dishName: "bang bang cauliflower",
    dishDes: "spicy firecracker sauce. onion. ginger",
    dishKcal: 445,
    dishImg: imgCauliflower,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
];

const createSides = () => {
  // let cards = [];
  // sidesMenu.forEach((side, index) => {
  //   cards.push(createCard(side));
  // });
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards");
  sidesMenu.forEach((side) => {
    cardsContainer.appendChild(createCard(side));
  });
  return cardsContainer;
};

export { createSides };
