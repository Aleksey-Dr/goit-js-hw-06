"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

console.log(boxes);
console.log(input);

createBtn.addEventListener('click', () => {
  const items = [];
  const amount = input.value;

  for (let i = 0; i < Number(amount); i += 1) {
    let item = document.createElement('div');

    let size = `${30 + i * 10}px`;
    item.style.width = size;
    item.style.height = size;
    item.style.background = getRandomHexColor();
    item.classList.add('element');

    items.push(item);
  }
  boxes.append(...items);
  });

destroyBtn.addEventListener('click', () => {
  const amount = boxes.childNodes.length;

  for (let i = 0; i < amount; i += 1) {
    let element = document.querySelector('.element');
    element.remove();
  }
});