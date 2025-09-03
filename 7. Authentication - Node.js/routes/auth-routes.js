const express = require('express')
const {loginUser, registerUser, changePassword} = require('../controller/auth-controller')
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

// all routes are related to autthentication & authorization
router.post('/register', registerUser);
router.post('/login',loginUser);
router.post('/change-password',authMiddleware, changePassword);









module.exports = router