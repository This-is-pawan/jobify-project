const { Router } = require("express");
const { UserData, profileData } = require("../controllers/AuthController");
const { authenticateUser } = require("../middleware/Authmiddleware");
// const { profileData } = require("./controllers/AuthController");

const AuthDataGet = Router();

AuthDataGet.get("/data", authenticateUser, UserData);
// AuthDataGet.get("/profile-data", authenticateUser, profileData);
AuthDataGet.get("/profile-data",authenticateUser,profileData)
module.exports = { AuthDataGet };
