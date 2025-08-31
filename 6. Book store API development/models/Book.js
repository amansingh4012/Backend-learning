const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'book title require'],
        trim : true,
        maxLength : [100, 'book tittle not more than 100 character']
    },
    author: {
        type : String,
        required : [true, 'author name require'],
        trim : true,
    },
    year : {
        type : Number,
        required : [true, 'publication year require'],
        trim : true,
        min : [1000, 'year msut be atleast 1000'],
        max : [new Date().getFullYear(), 'year cannot be in fututre ']
    },
    createdAt : {
            type : Date,
            default : Date.now,
        
    }
})

module.exports = mongoose.model('Book', BookSchema)