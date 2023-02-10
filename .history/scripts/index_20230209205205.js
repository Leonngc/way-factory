const menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');

menu.addEventListener('click', event =>{
    linkMenu.style.display = 'block'
    menu = true
})