const btnLogin = document.querySelector('.button');
const wrongText = document.querySelector('.wrong-password');

btnLogin.addEventListener('click', wrongPassword);
function wrongPassword() {
    wrongText.classList.remove('inactive');
    btnLogin.style.cssText = 'margin-bottom: 1vh';
}