
const {Router}=require('express')
const { register, login, logout,  profileData } = require('../controllers/AuthController')
const {

 validateLoginInput,validateRegisterInput
 
} = require("../validator/jobInputvalidator");
const { uploads } = require('../middleware/Multermiddleware');
const { authenticateUser } = require('../middleware/Authmiddleware');

const Authrouter=Router()
Authrouter.post('/register',validateRegisterInput,register)
Authrouter.post('/login',validateLoginInput,login)
Authrouter.post('/logout',logout)
// Authrouter.get("/profile-data",  profileData);
module.exports={Authrouter}