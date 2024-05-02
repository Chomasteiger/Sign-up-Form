const pass = document.querySelector('#password');
const confpass = document.querySelector('#confirmpassword');
const form = document.querySelector('form');

function matchPassword() {
    if (pass.value != confpass.value) {
        pass.setCustomValidity('Passwords do not match');
        confpass.setCustomValidity('Passwords do not match');
    } else {
        pass.setCustomValidity('');
        confpass.setCustomValidity('');
    }
}

form.addEventListener('input', matchPassword);