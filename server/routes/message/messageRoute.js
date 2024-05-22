const express = require("express");
const {getMessage, sendMessage} = require("../../controller/messageController"); 
const {isAuthenticated} = require("../../middleware/isAuthenticate");

const router = express();


router.route("/send/:id").post(isAuthenticated, sendMessage)
router.route("/:id").get(isAuthenticated, getMessage);

module.exports = router