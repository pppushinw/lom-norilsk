let menu = document.getElementById('dropDownMenu')
let buttonMenu = document.getElementById('buttonMenu')


buttonMenu.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none'
        }   else {
            menu.style.display = 'block'
        }
    buttonMenu.classList.toggle('toggle-menu-active')



})