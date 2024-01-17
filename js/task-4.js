const form = document.querySelector('.login-form');

const registration = (event) => {
    event.preventDefault()
    const emailValue = event.target.elements.email.value.trim();
    const passwordValue = event.target.elements.password.value.trim();
    if (!emailValue || !passwordValue) {
        return alert('All form fields must be filled in');
    }
    const formResult = {
        email: emailValue,
        password: passwordValue,
    }
    console.log(formResult);
    form.reset();
}
form.addEventListener('submit', registration);
