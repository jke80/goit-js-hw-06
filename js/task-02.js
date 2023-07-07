const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

list.append(
  ...ingredients.map((ingredient) => {
    const ingredElem = document.createElement("li");
    ingredElem.textContent = ingredient;
    ingredElem.classList.add("item");
    return ingredElem;
  })
);
