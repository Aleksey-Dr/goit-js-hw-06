"use strict";

const inputRange =
    document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// console.log(inputRange);
// console.log(text);

inputRange.addEventListener('input', (event, currentSize) => {
    currentSize = event.currentTarget.value;
    text.style.fontSize = `${currentSize}px`;
    // console.log(currentSize);
    // console.log(text.style.fontSize);
});