function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)
  .padStart(6, 0)}`;
}
const refs = {
  bodyEl: document.querySelector('body'),
  magicBtn: document.querySelector('.change-color'),
  spanOutput: document.querySelector('.color'),
};

refs.magicBtn.addEventListener('click', bodyColorHandler);

function bodyColorHandler() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanOutput.textContent = getRandomHexColor();
};
