const User = require("../models/userModel");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  const { email, password, name, location, lastName } = req.body;
  if (!email || !password || !name || !location || !lastName) {
    res.json({ success: false, message: "something input missing" });
  }
  try {
    const existuser = await User.findOne({ email });
    if (existuser) {
      res.json({ success: false, message: "User Already Register" });
    }
    const salt = await bcrypt.genSalt(10);
    const userpass = await bcrypt.hash(password, salt);

    // const user=await User.create({email,password:userpass,name,location}) both can be used
    const users = new User({
      email,
      password: userpass,
      name,
      location,
      lastName,
    });
    const token = jwt.sign({ id: users._id }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      secure: process.env.NODE_ENV === "production" || "devlopment",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    await users.save();

    res.json({ success: true, message: "Register Successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
  res.json({ success: true, message: "Register Successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ success: false, message: "Something input missing" });
  }
  try {
    const existuser = await User.findOne({ email });

    if (!existuser) {
      res.json({ success: false, message: "User is not avaliable" });
    }
    const userpass = bcrypt.compare(password, existuser.password);
    if (!userpass) {
      res.json({ success: false, message: "invalid crendentials" });
    }

    const token = jwt.sign({ id: existuser._id }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      secure: process.env.NODE_ENV === "production" || "devlopment",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Login Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });
  return res.json({ success: true, message: "Logout Successfully" });
};


exports.UserData = async (req, res) => {
  const id = req.userId;

  try {
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ msg: `No user with id ${id}` });
    }
    return res.status(200).json({
      success: true,
      msg: "User is available",
      userData: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

exports.uploadimg = async (req, res) => {
  const { name, email } = req.body;
  const photopath = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !email || !photopath) {
    return res.json({
      success: false,
      message: "Missing name, email, or photo",
    });
  }

  try {
    const exist = await User.findOne({ email, name });

    if (!exist) {
      return res.json({
        success: false,
        message: "User does not exist. Please login first.",
      });
    }

    exist.photo = photopath;
    await exist.save();

    res.json({
      success: true,
      message: "Photo updated successfully",
      user: exist,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.profileData =  async (req, res) => {
  const userId = req.userId;
  console.log("UserID from middleware:", userId);

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
