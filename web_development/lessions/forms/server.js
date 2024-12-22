const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static('public'))

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "13082000",
  database: "form_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

// Serve the form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

// Insert data into the database
app.post("/submit", (req, res) => {
  const { name, lastName, email, password, confirmPassword, phone } = req.body;
  const query =
    "INSERT INTO users (name, lastName, email, password, confirmPassword, phone) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, lastName, email, password, confirmPassword, phone],
    (err) => {
      if (err) {
        console.error("Error inserting data:", err);
        res
          .status(500)
          .json({ message: "An error occurred. Please try again later." });
      } else {
        console.log("Data inserted successfully");
        res.json({ message: "Form submitted successfully!" });
      }
    }
  );
});

// Show tables in the database
app.get("/showTables", (req, res) => {
  const query = "SHOW TABLES";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching tables:", err);
      res
        .status(500)
        .json({ message: "An error occurred while fetching tables." });
    } else {
      console.log("Tables fetched successfully:", results);
      res.json({ tables: results });
    }
  });
});
// Show all data in the 'users' table
app.get("/showUsers", (req, res) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching data from users table:", err);
        res
          .status(500)
          .json({ message: "An error occurred while fetching user data." });
      } else {
        console.log("User data fetched successfully:", results);
        res.json({ users: results });
      }
    });
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
