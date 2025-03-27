document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let age = document.getElementById("age");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let state = document.getElementById("state");
    let terms = document.getElementById("terms");

    let isValid = true;

    if (firstName.value.trim() === "") {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("firstNameError").style.display = "none";
    }

    if (lastName.value.trim() === "") {
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("lastNameError").style.display = "none";
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (password.value.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    if (confirmPassword.value !== password.value) {
        document.getElementById("confirmPasswordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").style.display = "none";
    }

    if (age.value.trim() === "" || age.value < 1) {
        document.getElementById("ageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("ageError").style.display = "none";
    }

    if (phone.value.length !== 10 || isNaN(phone.value)) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    if (address.value.trim() === "") {
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("addressError").style.display = "none";
    }

    if (state.value.trim() === "") {
        document.getElementById("stateError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("stateError").style.display = "none";
    }

    if (!terms.checked) {
        alert("You must agree to the terms and conditions.");
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});
