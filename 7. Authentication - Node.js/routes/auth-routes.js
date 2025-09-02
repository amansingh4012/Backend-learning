const express = require('express')
const {loginUser, registerUser} = require('../controller/auth-controller')
const router = express.Router();


// all routes are related to autthentication & authorization
router.post('/register', registerUser);
router.post('/login',loginUser);









module.exports = router