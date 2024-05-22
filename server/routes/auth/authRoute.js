// route/router.js
const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  getOtherUsers,
} = require("../../controller/authController");

const { isAuthenticated } = require("../../middleware/isAuthenticate.js");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/other_users").get(isAuthenticated, getOtherUsers);

module.exports = router;
