let counterValue = 0;
const decBtn = document.querySelector('button[data-action ="decrement"]');
const incBtn = document.querySelector('button[data-action ="increment"]');
const counterValueEl = document.querySelector("#value");

decBtn.addEventListener("click", onClick);
incBtn.addEventListener("click", onClick);

function onClick(event) {
  counterValue =
    event.currentTarget.dataset.action === "decrement"
      ? counterValue - 1
      : counterValue + 1;
  counterValueEl.textContent = counterValue;
}
