const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Function to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// REGISTER USER
const registerUser = async (req, res) => {
    const {
      username,
      email,
      password,
      phone,
      fullName,
      dob,
      gender,
      country,
      city,
      interests,
      newsletter,
      termsAccepted,
    } = req.body;
  
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const newUser = await User.create({
        username,
        email,
        password,
        phone,
        fullName,
        dob,
        gender,
        country,
        city,
        interests,
        newsletter,
        termsAccepted,
      });

      console.log(newUser);
  
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token: generateToken(newUser._id),
      });
    } catch (error) {
      res.status(500).json({ message: "Registration failed", error: error.message });
    }
  };
  
// LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      token: generateToken(user._id),
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName, // ✅ Add this line
        avatar: user.avatar,     // optional, if you have avatars stored
        role: user.role || "Learner" // optional default
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};


module.exports = { registerUser, loginUser };
