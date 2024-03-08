
function validateForm() {
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var error = document.getElementById("error");
    var inputBox = document.querySelectorAll('.inputbox input');

    // Simple username validation
    if (!username) {
        error.innerHTML = "Please enter a username";
        // Apply error styling to input box
        inputBox.forEach(function(input) {
            input.style.borderColor = "#45f3ff";
        });
        return false;
    }

    // Simple password validation
    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters long";
        // Apply error styling to input box
        inputBox.forEach(function(input) {
            input.style.borderColor = "#45f3ff";
        });
        return false;
    }

    // Reset input box styling if validation is successful
    inputBox.forEach(function(input) {
        input.style.borderColor = ""; // Reset to default
    });

    // Hash the password using SHA-256
    var hashedPassword = sha256(password);

    // Clear previous error messages
    error.innerHTML = "";

    // In a real-world scenario, you would send the username and hashed password to the server for authentication
    // For demonstration purposes, we'll just log them to the console
    console.log("Username:", username);
    console.log("Hashed Password:", hashedPassword);

    return false; // Prevent form submission for demonstration
}

