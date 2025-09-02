const express = require('express')
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

router.get('/welcome',authMiddleware,  adminMiddleware, (req, res)=> {
    res.json({
        message : 'welcome to admin page '
    })
})

module.exports = router;