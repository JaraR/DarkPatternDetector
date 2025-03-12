require("dotenv").config(); // Load environment variables

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5004; // Changed port for the backend server

// Middleware
app.use(express.json());
app.use(cors());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST, // e.g., localhost
  port: process.env.DB_PORT, // e.g., 3307
  user: process.env.DB_USER, // e.g., myuser
  password: process.env.DB_PASSWORD, // e.g., mypassword
  database: process.env.DB_NAME, // e.g., mydatabase
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// **Test MySQL Connection**
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL successfully!");
    connection.release(); // Release the connection back to the pool
  }
});

// Sample API Endpoint
app.get("/api/data", (req, res) => {
  pool.query("SELECT * FROM your_table_name", (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error fetching data", error: err });
    }
    res.json(results);
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
