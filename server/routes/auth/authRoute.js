// route/router.js
const express = require("express");
const router = express.Router();
const {
  registrationSchema,
  loginSchema,
} = require("../../validator/authValid.js");
const {
  register,
  login,
  logout,
  getOtherUsers,
} = require("../../controller/authController");
const validate = require("../../middleware/authMiddle.js");
const isAuthenticated = require("../../middleware/isAuthenticate.js")

router.route("/register").post(validate(registrationSchema), register);
router.route("/login").post(validate(loginSchema), login);
router.route("/logout").get(logout);
router.route("/other_users").get(isAuthenticated, getOtherUsers);

module.exports = router;
