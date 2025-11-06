// server.js
// REST API structure simulation

const express = require("express");
const app = express();

// Get user list
app.get("/api/users", (req, res) => {
    res.json({ users: ["Alice", "Bob", "Charlie"] });
});

// Root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the API Server!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
