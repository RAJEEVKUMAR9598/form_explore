document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Input field values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation flags
    let isValid = true;

    // Clear any previous validation messages
    clearValidationMessages();

    // Validate first name
    if (firstName === '') {
        showValidationMessage('firstName', 'First Name is required');
        isValid = false;
    }

    // Validate last name
    if (lastName === '') {
        showValidationMessage('lastName', 'Last Name is required');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showValidationMessage('email', 'Please enter a valid email');
        isValid = false;
    }

    // Validate phone number (assuming 10-digit numbers)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showValidationMessage('phone', 'Please enter a valid phone number (10 digits)');
        isValid = false;
    }

    // Validate password (minimum 8 characters)
    if (password.length < 8) {
        showValidationMessage('password', 'Password must be at least 8 characters long');
        isValid = false;
    }

    // If the form is valid, log the data
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            email: email,
            password: password
        };
        console.log(formData);
        alert("Form submitted successfully!");

        // Optionally, clear the form
        document.getElementById('contactForm').reset();
    }
});

// Function to display validation message next to the input
function showValidationMessage(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    inputElement.parentElement.appendChild(errorElement);
}

// Function to clear all validation messages
function clearValidationMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.remove();
    });
}
