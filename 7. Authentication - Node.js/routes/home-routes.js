const express = require('express')
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

router.get('/welcome', authMiddleware,(req, res)=> {
    const {username, userId, role} = req.userInfo;
    res.json({
        message : 'welcome to the home ',
        user  : {
            _id : userId,
            username,
            role
        }
    })
})

module.exports = router 