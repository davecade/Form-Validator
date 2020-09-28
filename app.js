const username = {
    type: 'username',
    element: document.getElementById('username'),
    checked: false
}

const email = {
    type: 'email',
    element: document.getElementById('email'),
    checked: false
}

const userPassword = {
    type: 'password',
    element: document.getElementById('password'),
    checked: false
}

const userPassword2 = {
    type: 'password',
    element: document.getElementById('password2'),
    checked: false
}
let fields = [username, email, userPassword, userPassword2]
const submitButton = document.getElementById('submitButton');


function showError(element, error) {

    document.querySelector(`#${element.id} + small`).innerHTML = error;
    element.parentNode.classList.add('error')
}

function showSuccess(element) {
    element.parentNode.classList.add('success')
}

//Capitalizes a word
function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`
}

//Checks if length of a word is valid to min/max requirements
function checkLength(word) {
    let min = 5;
    let max = 10;

    if (word.length < min || word.length > max) {
        return false;
    }
    return true;
}

// Checks if any fields are empty
function checkRequired(fields) {
    fields.forEach(obj => {
        if (obj.element.value === "") {
            showError(obj.element, `${capitalize(obj.type)} is required!`)
            obj.checked = true;
        }
    });
}

//Checks if username is a valid one
function checkUsername(username) {
    if (username.checked === false) {
        if (checkLength(username.element.value)) {
            showSuccess(username.element)
        } else {
            showError(username.element, `Username must be at least 5 characters and maximum of 10.`)
        }
        username.checked = true;
    }
}

//Checks if email if a valid one
function checkEmail(email) {
    if (email.checked === false) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email.element.value).toLowerCase())) {
            showError(email.element, `This is not a valid email. Please enter a valid email.`)

        } else {
            showSuccess(email.element)
        }
        email.checked = true;
    }
}

//Checks if passwords length is valid, and then checks if passwords match
function checkPasswords(pass1, pass2) {
    if (pass1.checked === false && pass2.checked === false) {
        let pass1Length = checkLength(pass1.element.value)
        let pass2Length = checkLength(pass1.element.value)

        if (pass1Length === true && pass2Length === true) {
            if (pass1.element.value === pass2.element.value) {
                showSuccess(pass1.element)
                showSuccess(pass2.element)
            } else {
                showError(pass1.element, `Passwords do not match.`)
                showError(pass2.element, `Passwords do not match.`)
            }
        } else {
            showError(pass1.element, `Passwords must be at least 5 characters and maximum of 10.`)
            showError(pass2.element, `Passwords must be at least 5 characters and maximum of 10.`)
        }
    }
}

//Resets all fields to original state
function reset() {
    fields.forEach(obj => {
        obj.checked = false
        obj.element.parentNode.classList.remove('success')
        obj.element.parentNode.classList.remove('error')
    })
}

// Event Listener for when Submit button is clicked
submitButton.addEventListener('click', () => {
    reset();
    checkRequired(fields);
    checkUsername(username);
    checkEmail(email)
    checkPasswords(userPassword, userPassword2)
})