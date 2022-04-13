let form = document.getElementById('signupForm')
let signName = document.getElementById('signupUser')
let signEmail = document.getElementById('signupEmail')
let signNumber = document.getElementById('signupNumber')
let signPassword = document.getElementById('signupPassword')
let signCPassword = document.getElementById('signupCPassword')

let successMsg = document.getElementById('form-success')
let error = document.getElementById('form-error')
let errorMsg = document.getElementById('err-msg')

if (form) {

    form.addEventListener('submit', (e) => {
        let messages = []

        if (signName.value.length < 3) {
            messages.push('Error!')
            errorMsg.textContent = 'Error! User name must be more than 2 characters.'
        } else if (signEmail.value.length < 4) {
            messages.push('Error!')
            errorMsg.textContent = 'Error! Email must be greater than 3 characters'
        } else if (signNumber.value.length != 10) {
            messages.push('Error!')
            errorMsg.textContent = 'Error! Phone number should be 10 characters long'
        } else if (signPassword.value.length < 6) {
            messages.push('Error!')
            errorMsg.textContent = 'Error! Password must be greater than 5 characters'
        } else if (signPassword.value === 'password') {
            messages.push('Error! Password cannot be password.')
            errorMsg.textContent = 'Error! Password cannot be password.'
        } else if (signPassword.value != signCPassword.value) {
            messages.push('Error!')
            errorMsg.textContent = 'Error! Please check the confirm password field.'
        } else {
            messages.splice(0, messages.length)
            error.setAttribute('id', 'form-success')
            localStorage.setItem('success', "Success")
        }

        if (messages.length > 0) {
            error.removeAttribute('id')
            e.preventDefault()
        }
    })

    if (localStorage.getItem('success')) {
        localStorage.setItem('success', '')
        successMsg.removeAttribute('id')
    }

}




//Login page

let loginForm = document.getElementById('loginForm')
let loginName = document.getElementById('loginUser')
let loginPassword = document.getElementById('loginPassword')

let logSuccessMsg = document.getElementById('login-success')
let logError = document.getElementById('login-error')
let logErrorMsg = document.getElementById('log-err-msg')

let readButton = document.querySelector('.book-link')

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        let logMsg = []

        if (loginName.value != 'John' && loginName.value != 'john@gmail.com') {
            logMsg.push('Error!')
            logErrorMsg.textContent = 'Error! User Name is wrong.'
        } else if (loginPassword.value != 'john123') {
            logMsg.push('Error!')
            logErrorMsg.textContent = 'Error! Incorrect Password.'
        } else {
            logMsg.splice(0, logMsg.length)
            logError.setAttribute('id', 'login-error')
            sessionStorage.setItem('logSuccess', "LoginSuccess")
            sessionStorage.setItem('canRead', "yes")
        }

        if (logMsg.length > 0) {
            sessionStorage.setItem('canRead', '')
            logError.removeAttribute('id')
            e.preventDefault()
        }
    })
    
    if (sessionStorage.getItem('logSuccess')) {
        logSuccessMsg.removeAttribute('id')
    }
}


let frgtForm = document.getElementById('frgt')
let frgtEmail = document.getElementById('frgt-email')
let favBook = document.getElementById('fav-book')
let newPwd = document.getElementById('newPassword')

if (frgtForm) {
    frgtForm.addEventListener('submit', (e) => {
        let frgtMsg = []
        let favBookName = favBook.value

        if (frgtEmail.value != 'john@gmail.com') {
            frgtMsg.push('Error!')
            alert('Error! Email-id is incorrect.')
        } else if (favBookName.toLowerCase() != 'wings of fire') {
            frgtMsg.push('Error!')
            alert('Error! Favorite book name is wrong.')
        } else if (newPwd.value.length < 6) {
            frgtMsg.push('Error!')
            alert('Error! Password must be greater than 5 characters')
        } else {
            frgtMsg.splice(0, frgtMsg.length)
            sessionStorage.setItem('changePwd', "pwdChanged")
            sessionStorage.setItem('logSuccess', "LoginSuccess")
            sessionStorage.setItem('canRead', "yes")
        }
        
        if (frgtMsg.length > 0) {
            sessionStorage.setItem('canRead', '')
            e.preventDefault()
        }
    })

    
}

if (sessionStorage.getItem('changePwd')) {
    alert('Successfully changed the password')
    sessionStorage.setItem('changePwd', '')
}


if (readButton) {
    if (sessionStorage.getItem('canRead')) {
        readButton.href = './pdfpage.html'
    }
}