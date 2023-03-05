"use strict";

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUl = document.querySelector('.gallery');

// Exempe 1
// const galleryLi = images.map(img => {
//   const itemLi = document.createElement('li');
//   const itemImg = document.createElement('img');
//   itemImg.setAttribute('src', img.url);
//   itemImg.setAttribute('alt', img.alt);
//   itemImg.setAttribute('width', 480);
//   itemLi.append(itemImg);
//   return itemLi;
// });
// galleryUl.append(...galleryLi);

const galleryLi = images.map(img => `<li><img src=${img.url} 
  alt=${img.alt} width="480"/></li>`);

galleryUl.insertAdjacentHTML('afterbegin', galleryLi.join(''));