
const  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateForm = (username, password, setUserNameError, setPasswordError, setLoginStatus) => {
    let isValid = true
    if (!username) {
        setUserNameError('username fields Required')
        isValid = false
    }else{
        let isEmailValid = validateEmail(username)
        if (!isEmailValid) {
            setUserNameError('username is not valid a email')
            isValid = false
        }
    }

    if (!password) {
        setPasswordError('password fields Required')
        isValid = false
    }

    if (isValid) {
        setLoginStatus(true)
    }
}

export default validateForm