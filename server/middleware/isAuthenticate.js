const jwt = require("jsonwebtoken");
const User = require("../model/user");

const isAuthenticated = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  
  const jwtToken = token.replace("Bearer ", "").trim();
  // console.log("Token from auth middleware:", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized token" });
    }

    req.token = token;
    req.user = userData;
    req.id = userData._id; // Changed from req.userID to req.id for consistency with previous code

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized token" });
  }
};

module.exports = isAuthenticated;
