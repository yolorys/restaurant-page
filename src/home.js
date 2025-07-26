// src/home.js

function createHomePage() {
    const contentDiv = document.getElementById('content'); 
    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Amazing Restaurant!';

    const description = document.createElement('p');
    description.textContent = 'Experience culinary delights like no other. Our dishes are crafted with passion and the freshest ingredients.';


    contentDiv.appendChild(headline);
    contentDiv.appendChild(description);
}

export default createHomePage;