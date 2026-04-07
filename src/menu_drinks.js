import imgGoldenTea from "./assets/menu/golden_tea.png";
import imgJuicePositive from "./assets/menu/positive_juice.png";
import imgSaffronPicante from "./assets/menu/saffron-picante-750px.png";
import { createCard } from "./domUtils.js";

const drinksMenu = [
  {
    dishName: "positive",
    dishDes: "pineapple. lime. spinach. cucumber. apple",
    dishKcal: 122,
    dishImg: imgJuicePositive,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
  {
    dishName: "golden leaf breakfast tea - whole milk",
    dishDes: "",
    dishKcal: 20,
    dishImg: imgGoldenTea,
    dishNew: false,
    dishVegan: false,
    dishVege: true,
  },
  {
    dishName: "saffron picante",
    dishDes:
      "lime + saffron. sweet agave. chilli. ice. soda water. bird’s eye chilli. salt rim",
    dishKcal: 83,
    dishImg: imgSaffronPicante,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
];

const createDrinks = () => {
  // let cards = [];
  // sidesMenu.forEach((side, index) => {
  //   cards.push(createCard(side));
  // });
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards");
  drinksMenu.forEach((side) => {
    cardsContainer.appendChild(createCard(side));
  });
  return cardsContainer;
};

export { createDrinks };
