const session = localStorage.getItem('login');

const lockScreen = () => {
    if (session == 'false') {
        window.location.href = '../index.html';
    }
}

lockScreen();