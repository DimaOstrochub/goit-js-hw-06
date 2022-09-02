function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCollection = document.querySelector('#boxes');
const ref = {
  id: document.querySelector(`#controls`),
  input: document.querySelector(`input`),
  btnCreate: document.querySelector(`[data-create]`),
  btnDestroy: document.querySelector(`[data-destroy]`),
}


ref.btnCreate.addEventListener(`click`, onInputClick);
function onInputClick(event) {
  const newDiv = Number(ref.input.value);
  createBoxes(newDiv);
};

function createBoxes(amount) {
  const width = 30;
  const heigth = 30;
  let addValue = 0;

const elements = [];

for (let i = 0; i < amount; i += 1) {
  const divEl = document.createElement(`div`);
  divEl.classList.add(`box`)
  divEl.style.backgroundColor = getRandomHexColor();
  divEl.style.width = width + addValue + `px`;
  divEl.style.height = heigth + addValue + `px`;
  addValue += 10;

elements.push(divEl);
}
btnCollection.append(...elements);
};

ref.btnDestroy.addEventListener(`click`, destroyBoxes);
function destroyBoxes() {
  btnCollection.innerHTML = "";
}