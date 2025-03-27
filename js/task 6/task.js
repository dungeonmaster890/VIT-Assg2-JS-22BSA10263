document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    
    let isValid = true;

    if (username.value.trim() === "") {
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    if (password.value.trim() === "") {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        alert("Login successful!");
    }
});
