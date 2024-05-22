const express = require("express");
const connectionDB = require("./db/db");
const routes = require("./routes/auth/authRoute");
const message = require("./routes/message/messageRoute");
const cors = require("cors");
const http = require("http");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { Server } = require("socket.io");

// user Model
const userModel = require("./model/user");

// MongoDB connection
connectionDB();

// Initialize express app
const app = express();
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

// Create HTTP server and bind Socket.IO to it
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});


const userSocketMap = {}; //  userId:"socketId" Maps userId to socketId

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};



io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Get userId from handshake query
  const userId = socket.handshake.query.userId;

  if (userId !== undefined) {
    userSocketMap[userId] = socket.id;
    // Emit updated list of online users to all clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  }

  socket.on('disconnect', () => {
    // Remove user from the map on disconnect
    if (userId !== undefined) {
      delete userSocketMap[userId];
      // Emit updated list of online users to all clients
      io.emit('getOnlineUsers', Object.keys(userSocketMap));
    }
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

module.exports = { app, io, server, getReceiverSocketId };
