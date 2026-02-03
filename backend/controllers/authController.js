const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const saltRounds = 10;

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields required"
    });
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Hashing error"
      });
    }

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hash], err => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database error"
        });
      }

      res.json({
        success: true,
        message: "Signup success"
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, data) => {
    if (err || data.length === 0) {
      return res.json({
        success: false,
        message: "Email atau password salah"
      });
    }

    const user = data[0];

    bcrypt.compare(password, user.password, (err, match) => {
      if (!match) {
        return res.json({
          success: false,
          message: "Email atau password salah"
        });
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: false
      });

      res.json({
        success: true,
        message: "Login success"
      });
    });
  });
};

exports.dashboard = (req, res) => {
  const sql = "SELECT name FROM users WHERE id = ?";

  db.query(sql, [req.userId], (err, data) => {
    if (err || data.length === 0) {
      return res.status(500).json({
        auth: false
      });
    }

    res.json({
      auth: true,
      name: data[0].name
    });
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({
    success: true,
    message: "Logged out"
  });
};
