const express = require("express");
const connectionDB = require("./db/db");
const routes = require("./routes/auth/authRoute");
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
  origin: "http://localhost:8000",
  credential: true,
};
app.use(cors(corsOperation));

//auth routes
app.use("/api/auth", routes);

// localhost
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
