const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const parentCloseMenu = document.getElementById('par-close-menu')

openMenu.addEventListener('click', event => {
  parentCloseMenu.classList.toggle('toggleMenu')
})
 
closeMenu.addEventListener('click', event => {
  parentCloseMenu.classList.toggle('toggleMenu')
})