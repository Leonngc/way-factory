let menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');



menu.addEventListener('click', event =>{
    linkMenu.style.display = 'block'
})

else if(linkMenu.style.display == 'block'){
    menu.addEventListener('click', event =>{
        linkMenu.style.display = 'none'
    })
}