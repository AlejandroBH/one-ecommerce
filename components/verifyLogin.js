const loginMsg = document.querySelector('.login__validation');
const inputEmail = document.querySelector('[data-inputEmail]');
const inputPassword = document.querySelector('[data-inputPassword]');
const btnLogin = document.querySelector('[data-btnLogin]');

const user = 'admin@correo.com';
const pass = 'admin123';

const verifyLogin = () => {
    if (inputEmail.value === user && inputPassword.value === pass) {
        btnLogin.disabled = true;
        loginMsg.innerHTML = `<i class="fas fa-check-circle"></i> Acceso Correcto! espere unos segundos`;
        loginMsg.classList.toggle('login__validation--valid');

        saveSessionLogin(true);

        setTimeout(() => {
            window.location.href = '../screens/edit_products.html'
            btnLogin.disabled = false;
        }, 5000);
    } else {
        btnLogin.disabled = true;
        inputEmail.value = '';
        inputPassword.value = '';
        loginMsg.classList.toggle('login__validation--invalid');
        loginMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Acceso Incorrecto! intente nuevamente`;

        saveSessionLogin(false);

        setTimeout(() => {
            loginMsg.innerHTML = '';
            loginMsg.classList.remove('login__validation--invalid');
            btnLogin.disabled = false;
        }, 5000);
    }
}

const saveSessionLogin = (save) => {
    localStorage.setItem('login', save);
}

export default verifyLogin;