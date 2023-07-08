function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", onClick);

function onClick(event) {
  const bodyColor = getRandomHexColor();
  spanEl.textContent = String(bodyColor);
  bodyEl.style.backgroundColor = String(bodyColor);
}
