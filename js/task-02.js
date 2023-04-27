const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const namesArreyEl = document.querySelector("#ingredients");

const listItems = ingredients.map((element) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = element;
  return item;
});

namesArreyEl.append(...listItems);
