const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


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
        const salt = await bcrypt.genSalt(10);
        const hashedPasswordd =await bcrypt.hash(password,salt);

        //create a new user and save in your database 

        const newlyCreatedUser  = new User({
            username,
            email,
            password : hashedPasswordd,
            role : role || 'user'
        })

        await newlyCreatedUser.save();

        if(newlyCreatedUser){
            res.status(201).json({
                success : true,
                message : 'User registered successfully'
            })
        }else{
            res.status(400).json({
                success : false,
                message : 'please try again'
            })

        }

        
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
        const {username , password} = req.body;

        //find if the current user is exist in database or not 
        const user = await User.findOne({username});

        if(!user){
            res.status(400).json({
                success : false,
                message : 'user doesnt exists'
            })
        }

        // if the password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
            res.status(400).json({
                success : false,
                message : 'invalid Password'
            })
        }

        // create user token 
        const accessToken = jwt.sign({
            userId : user._id,
            username : user.username,
            role : user.role
        },process.env.JWT_SECRET,{
            expiresIn : '15m'
        })

        res.status(200).json({
            success : true,
            message : 'logged in successfully',
            accessToken
        })




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