let menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');


if(linkMenu.style.display  = 'none')
menu.addEventListener('click', event =>{
    linkMenu.style.display = 'block'
    menu = true
})

else if(linkMenu.style.display == 'block'){
    menu.addEventListener('click', event =>{
        linkMenu.style.display = 'none'
        menu = false
    })
}