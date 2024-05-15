const express = require("express");
const connectionDB = require("./db/db");
const routes = require("./routes/auth/authRoute");
const message = require("./routes/message/messageRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// user Model
const userModel = require("./model/user");

//mongoDB connection
connectionDB();

// app use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOperation = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOperation));

//auth routes
app.use("/api/auth", routes);
app.use("/api/message",message);

// localhost
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
