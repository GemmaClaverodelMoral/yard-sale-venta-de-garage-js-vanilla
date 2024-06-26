
const navbEmail       = document.querySelector(".navb_email")
const navMenuVertical = document.querySelector(".nav_menu_vertical")
const desktopMenu     = document.querySelector(".desktop_menu")
const mobileMenu      = document.querySelector(".mobile_menu")

navbEmail.addEventListener('click', toggleDesktopMenu)
navMenuVertical.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
} 

function toggleMobileMenu() {
    console.log('entre a tuggle')
    mobileMenu.classList.toggle('inactive');
} 