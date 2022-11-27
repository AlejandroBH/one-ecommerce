const loginSession = document.querySelector('[data-loginSession]');
const loginSessionBtn = document.querySelector('[data-loginSession] button');
const session = localStorage.getItem('login');

const verifySession = () => {
    if (session == 'true') {
        if (loginSession != null && loginSessionBtn != null) {
            loginSession.href = 'screens/edit_products.html';
            loginSessionBtn.innerHTML = `<i class="fa-solid fa-user"></i> Admin`
        }
    }
}

export default verifySession;