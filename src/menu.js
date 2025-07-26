// src/menu.js

function createMenuPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content

    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = 'Our Delicious Menu';

    const menuItem1 = document.createElement('p');
    menuItem1.textContent = 'Pizza: A classic, with fresh ingredients. $15';

    const menuItem2 = document.createElement('p');
    menuItem2.textContent = 'Pasta Carbonara: Creamy, rich, and satisfying. $18';

    contentDiv.appendChild(menuHeadline);
    contentDiv.appendChild(menuItem1);
    contentDiv.appendChild(menuItem2);

    // add a class for styling
    // contentDiv.classList.add('menu-page');
}

export default createMenuPage;