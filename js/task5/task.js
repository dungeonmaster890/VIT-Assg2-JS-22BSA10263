document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Name validation
    let name = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        name.classList.add("invalid");
        nameError.style.display = "inline";
        isValid = false;
    } else {
        name.classList.remove("invalid");
        nameError.style.display = "none";
    }

    // Email validation
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("invalid");
        emailError.style.display = "inline";
        isValid = false;
    } else {
        email.classList.remove("invalid");
        emailError.style.display = "none";
    }

    // Website validation
    let website = document.getElementById("website");
    let websiteError = document.getElementById("websiteError");
    let urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(website.value.trim())) {
        website.classList.add("invalid");
        websiteError.style.display = "inline";
        isValid = false;
    } else {
        website.classList.remove("invalid");
        websiteError.style.display = "none";
    }

    // Message validation
    let message = document.getElementById("message");
    let messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
        message.classList.add("invalid");
        messageError.style.display = "inline";
        isValid = false;
    } else {
        message.classList.remove("invalid");
        messageError.style.display = "none";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
