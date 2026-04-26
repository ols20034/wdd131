let selectElem = document.querySelector('#mode-select');
let logo = document.querySelector('.logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        logo.src = "images/byui-logo-white.png";

    } else if (current === 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        logo.src = "images/byui-logo-blue.jpg";
    }
}