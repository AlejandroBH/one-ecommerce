const session = localStorage.getItem('login');

const verifySession = () => {
    if (session == 'false') {
        window.location.href = '../index.html';
    }
}

export default verifySession;