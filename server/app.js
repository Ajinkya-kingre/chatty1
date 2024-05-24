const express = require("express");
const connectionDB = require("./db/db");
const routes = require("./routes/auth/authRoute");
const message = require("./routes/message/messageRoute");
const cors = require("cors");
const http = require("http");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { Server } = require("socket.io");
const { initializeSocket, getReceiverSocketId } = require("./socket");
const { app,server } = require("./socket") 
// user Model
const userModel = require("./model/user");

// MongoDB connection
connectionDB();

// Initialize express app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
};
app.use(cors(corsOptions));

// Use your routes
app.use("/api/auth", routes);
app.use("/api/message", message);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});


