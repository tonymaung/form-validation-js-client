const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
let isValid = false;
let passwordMatch = false;
let userData = []
localStorage.setItem("Registered Users", userData);

function formData() {
    const user = {
        fullName: form.fullName.value,
        phNumber: form.phNumber.value,
        email: form.email.value,
        websiteURL: form.websiteURL.value,
        password: form.password.value
    }
    return user;
}

function validateForm() {
    isValid = form.checkValidity();
    // Invalid Error
    if (!isValid) {
        message.textContent = "Please Fill out all fields!";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    // Check to see if password Match
    if (password.value === confirmPassword.value) {
        passwordMatch = true;
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    } else {
        passwordMatch = false;
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        message.textContent = "Make sure to match both passwords";
        message.style.color = "red"
        messageContainer.style.color = "red";
    }
    // Valid form and password match
    if (isValid && passwordMatch) {
        message.textContent = "Successfully Registered"
        message.style.color = "green"
        messageContainer.style.color = "green";
    }
}

function processFormData(e) {
    e.preventDefault();
    validateForm()
    if (isValid && passwordMatch) {
        userData.push(formData());
        localStorage.setItem("Registered Users", userData);
    }
}
form.addEventListener("submit", processFormData)