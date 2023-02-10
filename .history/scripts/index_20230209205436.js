let menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');

if(menu = false)
menu.addEventListener('click', event =>{
    linkMenu.style.display = 'block'
    menu = true
})

if(menu = true){
    linkMenu.style.display = 'none'
    menu = false
}