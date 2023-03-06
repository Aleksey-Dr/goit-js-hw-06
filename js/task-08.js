"use strict";

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    
    email === '' || password === '' ?
        alert('Please, fill in form fields') :
        console.log(`Login: ${email}, Password: ${password}`);
    
    const formData = {
        email,
        password,
    }
    
    event.currentTarget.reset();
});