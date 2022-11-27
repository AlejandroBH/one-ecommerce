const logoutSession = document.querySelector('[data-logoutSession]');

logoutSession.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('login', 'false');
    window.location.href = '../index.html';
});