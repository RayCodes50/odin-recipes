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

export { append };
