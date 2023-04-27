const inputEl = document.querySelector("#validation-input");
const imputTargetBlur = inputEl.addEventListener("blur", (event) => {
  if (inputEl.dataset.length === String(event.currentTarget.value.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
