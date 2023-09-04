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

const showMobileNav = () => {
    burgerCheck.checked? mobileNav.style.display = 'flex' : mobileNav.style.display = 'none'
}

burgerCheck.addEventListener('change', showMobileNav)

const biodata = {
    'email' : '',
    'address': '',
    'phone-number': '',
    'display-name': '',
    'first-name': '',
    'last-name': '',
    'birthday': '',
    'gender': ''
}

const getRadioValue = (radioName) => {
    for (let i = 0; i <= radioName.length; i++) {
        if (radioName[i].checked) {
            return radioName[i].value
        }
    }
    
}

saveBtn.addEventListener('click', () => {
    biodata.email = email.value
    biodata.address = address.value
    biodata["phone-number"] = phoneNumb.value
    biodata['display-name'] = displayName.value
    biodata["first-name"] = firstName.value
    biodata["last-name"] = lastName.value
    biodata.birthday = birthday.value
    biodata.gender = getRadioValue(gender)
    
    console.log(biodata);
})


logo.addEventListener('click', () => {
    window.location.href = '/index.html'
})