  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;

  const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true, // Removes leading and trailing whitespace
      },
      email: {
        type: String,
        required: true,
        unique: true, // Ensures the email is unique
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation pattern
      },
      password: {
        type: String,
        required: true,
        minlength: 8, // Require a minimum password length
      },
      usertoken: {
        type: String,
      },
    },
    {
      timestamps: true, // Automatically add createdAt and updatedAt fields
    }
  );

  const User = mongoose.model("User", userSchema);

  module.exports = User;
