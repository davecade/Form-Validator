const username = document.getElementById('username')
const email = document.getElementById('email')
const userPassword = document.getElementById('password')
const userPassword2 = document.getElementById('password2')
const submitButton = document.getElementById('submitButton');
const myArray = [username, email, userPassword, userPassword2]


function showError(element, error) {
    
    document.querySelector(`#${element.id} + small`).innerHTML = error;
    element.parentNode.classList.add('error')
}

function showSuccess(element) {
    element.parentNode.classList.add('success')
}

//Capitalizes a word
function capitalize(word) { return `${word[0].toUpperCase()}${word.slice(1)}` }

// Checks if any fields are empty
function checkRequired (fields) {
    fields.forEach(element => { 
         if(element.value==="") {
            showError(element, `${capitalize(element.id)} is required!`)
         } else {
            showSuccess(element)
         }
    });
}

function checkValidLength(element) {
    let min = 5;
    let max = 10;
    if(element.value.length < min || element.value.length > max) {
        showError(element, `${capitalize(element.id)} must be at least 5 characters and maximum of 10.`)
    } else {
        showSuccess(element)
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// Event Listener
submitButton.addEventListener('click', () => {
    checkRequired(myArray);
    checkValidLength(username);
})