const loginBtn = document.getElementById('login-btn')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const inputPhone = document.getElementById('input-phone')
const signUpBtn = document.getElementById('signup-btn')
const googleBtn = document.getElementById('google-btn')
const createMember = document.getElementById('create-member')
const passMsg = document.getElementById('password-msg')
const modal = document.getElementById('modal')
const modalMark = document.getElementById('modal-mark')
const markSymbol = document.getElementById('mark-symbol')
const modalMessage = document.getElementById('modal-message')

loginBtn.addEventListener('click', () => {
    window.location.href = '/login'
})

const userData = {
    email: '',
    password: '',
    phone: ''
}

const signUp = () => {

    if (inputEmail.value === '' || inputPassword.value === '' || inputPhone.value === '') {
        modal.style.display = 'flex'
        modalMark.style.backgroundColor = '#ff4757'
        markSymbol.innerHTML = '&#10060;'
        modalMessage.innerHTML = 'Failed'
    } else {
        userData.email = inputEmail.value
        userData.password = inputPassword.value
        userData.phone = inputPhone.value
        modal.style.display = 'flex'
        modalMark.style.backgroundColor = '#23ad5c'
        markSymbol.innerHTML = '&check;'
        modalMessage.innerHTML = 'Success'
    }

    setTimeout(() => {
        modal.style.display = 'none'
    }, 3000)

    console.log(userData);
}

inputPassword.addEventListener('input', () => {
    let strength = 0
    inputPassword.value.length > 0 ? passMsg.style.display = 'block' : passMsg.style.display = 'none';
    if (/[a-z]/.test(inputPassword.value)) { //cek jika mengandung huruf a-z
        strength += 1
    }
    if (/[A-Z]/.test(inputPassword.value)) { //cek jika mengandung huruf A-Z
        strength += 1
    }
    if (/[0-9]/.test(inputPassword.value)) { //cek jika mengandung angka
        strength += 1
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(inputPassword.value)) { //cek jika mengandung tanda baca
        strength += 1
    }
    if (inputPassword.value.length >= 8) { //cek jika panjang password >= 8 karakter
        strength += 1
    }

    if (strength < 3) {
        passMsg.innerHTML = 'Your password is too weak'
        passMsg.style.color = '#ff4757'
    } else if (strength < 5) {
        passMsg.innerHTML = 'Must contain alphabeth, number & symbol'
        passMsg.style.color = '#ffa500'
    } else {
        passMsg.innerHTML = 'Good password'
        passMsg.style.color = '#23ad5c'
    }

})




signUpBtn.addEventListener('click', signUp)