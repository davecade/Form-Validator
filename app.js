const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const submitButton = document.getElementById('submitButton');

let myArray = [username, email, password, password2]

function showError(element) {
    document.querySelector(".form-control small").innerHTML = `Please Enter a valid ${element}`
    element.classList.add("error")
}

function showSuccess(element) {

}

// Event Listener
submitButton.addEventListener('click', () => {
    myArray.forEach(element => {
        console.log(element)
        if(element === "") {
            showError(element)
        }
    });
})