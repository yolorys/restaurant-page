// src/contact.js

function createContactPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content

    const contactHeadline = document.createElement('h1');
    contactHeadline.textContent = 'Contact Us';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Main Street, Anytown, USA';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (555) 123-4567';

    const email = document.createElement('p');
    email.textContent = 'Email: info@restaurant.com';

    contentDiv.appendChild(contactHeadline);
    contentDiv.appendChild(address);
    contentDiv.appendChild(phone);
    contentDiv.appendChild(email);

    // add a class for styling
    // contentDiv.classList.add('contact-page');
}

export default createContactPage;