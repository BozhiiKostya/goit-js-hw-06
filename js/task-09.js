const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnChangeColorEl.addEventListener("click", getColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function getColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}
