// src/index.js

import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

console.log("Hello from index.js!"); 

document.addEventListener('DOMContentLoaded', () => {
    createHomePage();
});

homeButton.addEventListener('click', () => {
    createHomePage();
});

menuButton.addEventListener('click', () => {
    createMenuPage();
});

contactButton.addEventListener('click', () => {
    createContactPage();
});