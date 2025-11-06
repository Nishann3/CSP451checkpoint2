// connect.js
// Database connection simulation for web project

function connectDB() {
    const db = {
        host: "localhost",
        port: 3306,
        username: "root",
        password: "password123",
        database: "users"
    };
    console.log(`Connecting to database: ${db.database} at ${db.host}:${db.port}`);
    console.log("Connection successful!");
}

connectDB();
