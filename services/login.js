import verifyLogin from "../components/verifyLogin.js";

const loginForm = document.querySelector('[data-loginForm]');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    verifyLogin();
});