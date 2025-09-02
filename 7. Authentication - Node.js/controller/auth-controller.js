const User = require('../models/User')
const bcrypt = require('bcrypt')


// register controller
const registerUser = async(req,res) => {
    try {
        // extract  user information from 
        const { username, email, password, role} = req.body;

        //check if user is already exist in our database 
        const checkExistingUser = await User.findOne({$or : [{username}, {email}]})
        if(checkExistingUser){
            return res.status(400).json({
                success : false,
                message : 'user is already exists either with same user name or email'
            });

        }

        // hash user password

        
    } catch (error) {
         console.log(error),
        res.status(500).json({
            success : false,
            message : 'some error occur '
        })
        
    }
}






//  login controller

const loginUser = async(req,res) => {
    try {
        


    } catch (error) {
         console.log(error),
        res.status(500).json({
            success : false,
            message : 'some error occur '
        })
        
    }
}

module.exports = {
    registerUser,
    loginUser
}