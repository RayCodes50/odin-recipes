// helper function so i do not have to create dom element each time just
//use the function
function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.className) el.className = options.className;
  if (options.text) el.textContent = options.text;
  if (options.src) el.src = options.src;
  return el;
}
function append(parent, tag, options = {}) {
  if (!parent) {
    throw new Error("append: parent element is required");
  }
  const el = createElement(tag, options);
  parent.appendChild(el);
  return el;
}

function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
            <img src="${item.dishImg}" alt="" />
          <div class="allergens">

          </div>
          <h2 class="h2">${item.dishName}</h2>
          <p class="description">${item.dishDes}</p>
          <p class="kcal">(${item.dishKcal} kcal)</p>
          <button class="q_view">quick view</button>
  `;
  const allergens = card.querySelector(".allergens");
  if (item.dishNew) {
    append(allergens, "button", { className: "btn_new", text: "new" });
  }
  if (item.dishVegan) {
    append(allergens, "button", { className: "btn", text: "vg" });
  }
  if (item.dishVege) {
    append(allergens, "button", { className: "btn", text: "v" });
  }
  return card;
}

export { append, createCard };
