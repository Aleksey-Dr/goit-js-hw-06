const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const formData = {
        email,
        password,
    }
    
    email === '' || password === '' ?
        alert('Please, fill in form fields') :
        console.log(formData);
    
    event.currentTarget.reset();
});