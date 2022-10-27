const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form')

function validateInput() {
    if(input.value.length > 1) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }
}

function saveSubmit(save) {
    save.preventDefault();
    localStorage.setItem('Player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', saveSubmit);
