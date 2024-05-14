const userModel = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).send("Please fill all the required fields");
    } else {
      const isEmailExist = await userModel.findOne({ email });
      if (isEmailExist) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
          username,
          email,
          password: hashedPassword,
         
        });

        await newUser.save();

        res
          .status(200)
          .send({ message: "User created successfully!!!", user: {usertoken}});
      }
    }
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
};

//Login

 const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
         
        return res.status(400).send("Please fill all the required fields");
      }
  
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).send("User's email or password is incorrect");
      }
  
      const validateUser = await bcrypt.compare(password, user.password);
      if (!validateUser) {
        return res.status(400).send("User's email or password is incorrect");
      }
  
      // Generate JWT token
      const payload = {
        userId: user._id,
        email: user.email,
      };
  
      const JWT_SECRET_KEY =
        process.env.JWT_SECRET_KEY || "THIS_IS_JWT_SECRET_KEY";
      jwt.sign(
        payload,
        JWT_SECRET_KEY,
        { expiresIn: 84600 },
        async function (err, token) {
          if (err) {
            console.error("JWT signing error:", err);
            return res.status(500).json({ message: "Internal server error" });
          }
  
          // Update user document with the token
          await userModel.updateOne(
            { _id: user._id },
            { $set: { usertoken: token } }
          );
  
          // Send response with user object and token
          res
            .status(200)
            .json({
              user: { username: user.username, email: user.email },
              token,
            });
        }
      );
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

// Logout
const logout = async (req, res) => {
  try {
    // Clear user token from database (assuming user is authenticated)
    await userModel.updateOne({ _id: req.userId }, { $unset: { usertoken: 1 } });

    // Clear client-side token (optional)
    // For example, clear token from cookies or local storage

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Other Users
const getOtherUsers = async (req, res) => {
  try {
    const loggedInUserId = req.userId;
    const otherUsers = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password");
    return res.status(200).json(otherUsers);
  } catch (error) {
    console.error("Get other users error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login, logout, getOtherUsers };
