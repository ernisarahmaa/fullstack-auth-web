const express = require("express");
const {
  signup,
  login,
  dashboard,
  logout
} = require("../controllers/authController");
const verifyUser = require("../middlewares/verifyUser");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard", verifyUser, dashboard);

module.exports = router;
