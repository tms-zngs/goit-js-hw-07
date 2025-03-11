const userName = document.querySelector("#name-input");
const greetings = document.querySelector("#name-output");
userName.addEventListener("input", (event) => {
  const clearValue = event.target.value.trim();

  if (clearValue === "") {
    greetings.textContent = `Anonymous`;
  } else {
    greetings.textContent = clearValue;
  }
});
