const email = document.getElementById('email')
const address = document.getElementById('address')
const phoneNumb = document.getElementById('phone-numb')
const displayName = document.getElementById('display-name')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const birthday = document.getElementById('birthday')
const gender = document.getElementsByName('gender')
const saveBtn = document.getElementById('save-btn')
const logo = document.getElementById('logo')
const mobileNav = document.getElementById('mobile-nav')
const burgerCheck = document.getElementById('burger-check')
const itemCard = document.getElementsByClassName('card')
const showDeleteModal = document.getElementById('delete')
const deleteItem = document.getElementById('delete-fix')
const cancelBtn = document.getElementById('cancel')
const selectAll = document.getElementById('select')
const deleteModal = document.getElementById('delete-modal')

const showMobileNav = () => {
    burgerCheck.checked? mobileNav.style.display = 'flex' : mobileNav.style.display = 'none'
}

burgerCheck.addEventListener('change', showMobileNav)


const findChecked = () => {
    const list = []
    for (let i = 0; i <= itemCard.length-1; i++) {
        if (itemCard[i].querySelector('input').checked) {
            list.push(i)
        }
    }
    list.sort((a,b) => b-a).map(d => itemCard[d].remove())
    deleteModal.style.display = 'none'
}

showDeleteModal.addEventListener('click', () => {
    deleteModal.style.display = 'block'
})

cancelBtn.addEventListener('click', () => {
    deleteModal.style.display = 'none'
})

deleteItem.addEventListener('click', findChecked)