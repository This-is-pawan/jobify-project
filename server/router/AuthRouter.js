
const {Router}=require('express')
const { register, login, logout, UserData } = require('../controllers/AuthController')
const {

 validateLoginInput,validateRegisterInput
 
} = require("../validator/jobInputvalidator");
// const { authenticateUser } = require('../middleware/Authmiddleware')
// const { authenticateUser } = require('../middleware/Authmiddleware')
// authenticateUser
const Authrouter=Router()
Authrouter.post('/register',validateRegisterInput,register)
Authrouter.post('/login',validateLoginInput,login)
Authrouter.post('/logout',logout)

module.exports={Authrouter}