const velueEl = document.querySelector("#value");
const btnDescrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;
btnIncrement.addEventListener("click", () => {
  velueEl.textContent = counterValue += 1;
});

btnDescrement.addEventListener("click", () => {
  velueEl.textContent = counterValue -= 1;
});
