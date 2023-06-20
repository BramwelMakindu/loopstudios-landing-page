const sideMenu = document.querySelector('.sidemenu');

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', ()=> {
    sideMenu.style.left = '0';
});

closeMenu.addEventListener('click', ()=> {
    sideMenu.style.left = '-100%';
});