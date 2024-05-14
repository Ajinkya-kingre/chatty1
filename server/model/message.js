const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageModel = new Schema({
  senderId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  recieverId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageModel)

module.exports = Message
