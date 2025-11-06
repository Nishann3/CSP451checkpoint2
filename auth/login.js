// login.js
// User Authentication Module
// Handles user login validation and message output.

function validateLogin(username, password) {
    if (!username || !password) {
        console.log("Error: Both username and password are required.");
        return false;
    }
    if (username === "admin" && password === "1234") {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid credentials. Try again.");
        return false;
    }
}

validateLogin("admin", "1234");
// minor update for PR visibility
