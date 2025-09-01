const mongoose = require('mongoose')
require('dotenv').config();



const connectToDB = async() => {
    try {
            await mongoose.connect( process.env.MONGODB_URI);
            console.log('Mongo connect Successfully')
        
    } catch (error) {
        
        console.error('MongoDB connection failed', error)
        process.exit(1)
    }
}

module.exports = connectToDB;