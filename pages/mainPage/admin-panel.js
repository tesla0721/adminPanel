const logout = document.querySelector('.logout');
logout.addEventListener('click', () => {
    window.location.replace(window.location.protocol + '//' + window.location.hostname + '/adminPanel');
});