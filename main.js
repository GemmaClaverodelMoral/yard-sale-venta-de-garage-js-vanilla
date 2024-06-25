const desktopMenu = document.querySelector(".desktop_menu")
const navbEmail   = document.querySelector(".navb_email")

navbEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
} 