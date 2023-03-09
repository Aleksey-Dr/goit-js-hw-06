const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email,
            password, }
    } = event.currentTarget;
    
    email.value === '' || password.value === '' ?
        alert('Please, fill in form fields') :
        console.log(`Login: ${email.value}, Password: ${password.value}`);
    
    event.currentTarget.reset();
});