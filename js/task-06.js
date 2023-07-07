const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const valid =
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length);

  if (valid) {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.replace("invalid", "valid");
    } else event.currentTarget.classList.add("valid");
  } else {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.replace("valid", "invalid");
    } else event.currentTarget.classList.add("invalid");
  }
}
