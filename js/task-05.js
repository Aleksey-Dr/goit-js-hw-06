"use strict";

const input = document.querySelector('#name-input');
const display = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    display.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        display.textContent = 'Anonymous';
    }
});