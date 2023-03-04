"use strict";

const categories = document.querySelector('#categories');
// console.log(categories);
console.log(categories.children);

// Counter categories
const counterCategories = categories.children.length;
console.log('Number of categories:', counterCategories);
console.log('');

// Log titles categories and counters elements
const copyCategories = [...categories.children].forEach(function (child) {
    console.log('Category:', child.firstElementChild.textContent);
    console.log('Elements:', child.lastElementChild.children.length);
    console.log('');
});