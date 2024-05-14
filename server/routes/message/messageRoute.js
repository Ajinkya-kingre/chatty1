const express = require("express");
const {getMessage, sendMessage} = require("../../controller/messageController"); 
const isAuthenticate = require("../../middleware/isAuthenticate");

const router = express();


router.route("/send/:id").post(isAuthenticate, sendMessage)
router.route("/:id").post(isAuthenticate, getMessage);

module.exports = router