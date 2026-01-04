const bcrypt = require("bcryptjs");
const User = require("../models/auth/usermodel");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  try {
    console.log("Register endpoint hit");
    console.log("Request body:", req.body);
    console.log("Request headers:", req.headers['content-type']);
    
    // Check if body exists
    if (!req.body || Object.keys(req.body).length === 0) {
      console.error("Request body is empty or undefined");
      return res.status(400).json({ 
        success: false,
        message: "Request body is required",
        receivedBody: req.body
      });
    }
    
    const { name, email, password } = req.body;
    
    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields (name, email, password) are required",
        received: { name, email, password }
      });
    }
    
    // Trim and validate
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();
    
    // Check if user already exists
    const exists = await User.findOne({ email: trimmedEmail });
    if (exists) {
      return res.status(400).json({ 
        success: false,
        message: "User already exists" 
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await User.create({
      name: trimmedName,
      email: trimmedEmail,
      password: hashedPassword,
    });
    
    res.status(201).json({
      success: true,
      message: "Registration successful",
      token: generateToken(user),
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error during registration",
      error: error.message 
    });
  }
};

exports.login = async (req, res) => {
  try {
    console.log("Login endpoint hit");
    console.log("Request body:", req.body);
    
    // Check if body exists
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ 
        success: false,
        message: "Request body is required" 
      });
    }
    
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "Email and password are required" 
      });
    }
    
    // Trim email
    const trimmedEmail = email.trim().toLowerCase();
    
    // Find user
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: "User not found" 
      });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }
    
    res.json({
      success: true,
      message: "Login successful",
      token: generateToken(user),
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error during login",
      error: error.message 
    });
  }
};