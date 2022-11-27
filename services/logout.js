const logoutSession = document.querySelector('[data-logoutSession]');

logoutSession.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('login', 'false');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000);
});