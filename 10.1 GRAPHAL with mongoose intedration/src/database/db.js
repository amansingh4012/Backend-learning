const mongoose = require('mongoose')
require('dotenv').config();

const connectToDB = async() => {
    try {
        
        await mongoose.connect( process.env.MONGO_URI);
        console.log('MongoDB connected successfully')
    } catch (err) {
        console.log(typeof(process.env.MONGO_URI))
       
        
    }
}

module.exports = connectToDB;