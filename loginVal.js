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
}

if (sessionStorage.getItem('logSuccess')) {
    logSuccessMsg.removeAttribute('id')
}

if (sessionStorage.getItem('canRead')) {
    readButton.href = './pdfpage.html'
}