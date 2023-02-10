let menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');


if(menu.style.display  = 'none')
menu.addEventListener('click', event =>{
    linkMenu.style.display = 'block'
    menu = true
})

if(menu = true){
    menu.addEventListener('click', event =>{
        linkMenu.style.display = 'none'
        menu = false
    })
}