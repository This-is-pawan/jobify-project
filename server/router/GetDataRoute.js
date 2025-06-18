const { Router } = require("express");
const { UserData } = require("../controllers/AuthController");
const { authenticateUser } = require("../middleware/Authmiddleware");
const AuthDataGet = Router();

AuthDataGet.get("/data", authenticateUser, UserData);

module.exports = { AuthDataGet };
