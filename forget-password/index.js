const inputEmail = document.getElementById('input-email')
const sendEmail = document.getElementById('send-email')
const resendLink = document.getElementById('resend-link')

const generateEmail = () => {
    console.log(inputEmail.value);
}

sendEmail.addEventListener('click', generateEmail)