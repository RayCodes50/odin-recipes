const loadHome = () => {
  console.log("Hello home Page");
  // helper function so i do not have to create dom element each time just
  //use the function
  function createElement(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.className) el.className = options.className;
    if (options.text) el.textContent = options.text;
    return el;
  }
  const content = document.getElementById("content");
  const heroDiv = createElement("div", {
    className: "hero",
    text: "Hello Ray Odinson",
  });
  content.appendChild(heroDiv);
};

const greeting = "Hello, Odinite";

export { greeting, loadHome };
