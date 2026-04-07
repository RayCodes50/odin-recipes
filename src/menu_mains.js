import imgBorosu from "./assets/menu/kare_burosu.png";
import imgRaisukareeTofu from "./assets/menu/tofu_raisukaree.png";
import imgKatsuYasai from "./assets/menu/yasai_katsu.png";
import { createCard } from "./domUtils.js";

const mainsMenu = [
  {
    dishName: "kare burosu ramen",
    dishDes:
      "shichimi-coated silken tofu. udon noodles. curried vegetable broth. mushrooms. pea shoots. carrot....",
    dishKcal: 706,
    dishImg: imgBorosu,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
  {
    dishName: "tofu raisukaree",
    dishDes:
      "mild + warming. coconut curry sauce. mangetout. peppers. onion. chilli. sesame seeds. white rice ",
    dishKcal: 1135,
    dishImg: imgRaisukareeTofu,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
  {
    dishName: "yasai katsu curry",
    dishDes:
      "panko sweet potato, aubergine and butternut squash. sticky white rice. katsu curry sauce. dressed salad. pickles",
    dishKcal: 1223,
    dishImg: imgKatsuYasai,
    dishNew: false,
    dishVegan: true,
    dishVege: true,
  },
];

const createMains = () => {
  // let cards = [];
  // mainsMenu.forEach((side, index) => {
  //   cards.push(createCard(side));
  // });
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards");
  mainsMenu.forEach((side) => {
    cardsContainer.appendChild(createCard(side));
  });
  return cardsContainer;
};

export { createMains };
