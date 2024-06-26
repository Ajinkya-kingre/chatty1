const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB connected successfully !!");
  } catch (error) {
    console.log("MongoDB connection error::" + error);
  }
};

module.exports = connectionDB;
