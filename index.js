const mobileNav = document.getElementById('mobile-nav')
const burgerCheck = document.getElementById('burger-check')

const showMobileNav = () => {
    burgerCheck.checked? mobileNav.style.display = 'flex' : mobileNav.style.display = 'none'
}

burgerCheck.addEventListener('change', showMobileNav)

