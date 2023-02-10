let menu = document.getElementById('menu-burguer');
const linkMenu = document.getElementById('links-menu');


function(e)
menu.addEventListener('click', event =>{
    if(linkMenu.style.display == 'none'){
    linkMenu.style.display = 'block'} else{
        linkMenu.style.display = 'none'
    }
})
