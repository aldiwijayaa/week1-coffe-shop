const signUpBtn = document.getElementById('sign-up-btn')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const loginBtn = document.getElementById('login-btn')
const googleBtn = document.getElementById('google-btn')
const createMember = document.getElementById('create-member')
const forgot = document.getElementById('forgot')

const modal = document.getElementById('modal')
const modalMark = document.getElementById('modal-mark')
const markSymbol = document.getElementById('mark-symbol')
const modalMessage = document.getElementById('modal-message')


signUpBtn.addEventListener('click', () => {
    window.location.href = '/sign-up'
})

const userData = [
    {
        email: 'admin123@admin.com',
        password: 'admin123'
    },
    {
        email: 'aldi@gmail.com',
        password: 'aldi123'
    },
    {
        email: 'fazztrack@mail.com',
        password: 'fazztrack123'
    }
]

loginBtn.addEventListener('click', () => {
    let findUser = userData.find(data => {return data.email === inputEmail.value && data.password === inputPassword.value })
    if (findUser) {
        modal.style.display = 'flex'
        modalMark.style.backgroundColor = '#23ad5c'
        markSymbol.innerHTML = '&check;'
        modalMessage.innerHTML = 'Login Success'
    } else {
        modal.style.display = 'flex'
        modalMark.style.backgroundColor = '#ff4757'
        markSymbol.innerHTML = '&#10060;'
        modalMessage.innerHTML = 'Login Failed'
    }

    setTimeout(() => {
        modal.style.display = 'none'
    }, 3000)

    console.log(`email : ${inputEmail.value}`);
    console.log(`password : ${inputPassword.value}`);
})

forgot.onclick = () => {
    window.location.href = '/forgot-password'
}

