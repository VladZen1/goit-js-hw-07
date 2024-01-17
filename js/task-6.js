function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newBoxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

function createBoxes(amount) {
  const elementsBox = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.background = getRandomHexColor();
      elementsBox.push(box);
    }
     newBoxes.append(...elementsBox);
};

function destroyBoxes() {
  newBoxes.innerHTML = '';
 
};

createButton.addEventListener('click', () => {
  if (input.value <= 100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
