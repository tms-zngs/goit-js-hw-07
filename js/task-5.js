function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const rndColor = getRandomHexColor();
  document.body.style.backgroundColor = rndColor;
  document.querySelector(".color").textContent = rndColor;
});
