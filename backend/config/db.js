const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_db"
});

db.connect(err => {
  if (err) {
    console.error("❌ DB Connection Failed");
  } else {
    console.log("✅ DB Connected");
  }
});

module.exports = db;
