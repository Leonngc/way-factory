let menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');



menu.addEventListener('click', event =>{
    if(linkMenu)
    linkMenu.style.display = 'block'
})
