function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("#controls > input"),
  btnCreateEl: document.querySelector("button[data-create]"),
  btnDestroyEl: document.querySelector("button[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
};

refs.btnCreateEl.addEventListener("click", onClick);
refs.btnDestroyEl.addEventListener("click", onClick);

function onClick(event) {
  const amount = refs.inputEl.valueAsNumber;
  if (event.currentTarget.hasAttribute("data-create") && amount) {
    createBoxes(amount);
  } else {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style=" width: ${20 + 10 * i}px; height: ${
      20 + 10 * i
    }px; background-color: ${getRandomHexColor()}"></div> `;
  }
  refs.divBoxesEl.innerHTML = markup;
}

function destroyBoxes() {
  refs.divBoxesEl.innerHTML = "";
}
