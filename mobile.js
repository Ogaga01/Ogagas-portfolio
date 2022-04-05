const openMenu = document.getElementById('menu-up')
const closeMenu = document.querySelector(".close")
const popUp = document.querySelector(".menu-list")
const listItem =document.querySelectorAll('.list')

openMenu.addEventListener('click', () => {
popUp.classList.add('show')
})
openMenu.addEventListener('click', () => {
    listItem.style.display = "block"
})
closeMenu.addEventListener("click", () => {
    popUp.classList.remove('show')
})

listItem.forEach((item) => {
    item.addEventListener('click', () => {
        popUp.classList.remove('show')
    })
})
