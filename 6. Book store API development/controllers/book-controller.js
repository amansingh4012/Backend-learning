const Book = require('../models/Book')

const getAllBooks = async(req , res) =>{
    try {
        const allBooks = await Book.find();

        if(allBooks?.length> 0){
            res.status(200).json({
                success : true,
                message : "list of books fetch successfully",
                data : allBooks
            })
        }
         else{
            res.status(404).json({
                success: false,
                message : "no book foumd in database"
                
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wrong "
        })
        
    }
    
}


const getSingleBookById = async(req , res) =>{

    try {
        const getBookID =  req.params.id;
        const getBookByID = await Book.findById(getBookID);
        
        if(!getBookByID){
            res.status(404).json({
            success : false,
            message : "book by this id not found",

           })
        }
        
            res.status(200).json({
                success : true,
                data : getBookByID
            })
        
        
    } catch (error) {
         res.status(500).json({
            success : false,
            message : "something went wrong "
        })
        
    }

}


const addNewBook = async(req , res) =>{
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData)

        if(newlyCreatedBook){
            res.status(201).json({
                success : true,
                message : 'book added successfully',
                data : newlyCreatedBook,
            })
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
        success: false,
        message: 'An error occurred while adding the book.',
        error: error.message 
    });
        
    }

}
const updateBook = async(req , res) =>{

}
const deleteBook = async(req , res) =>{

}

module.exports = {getAllBooks, addNewBook, updateBook, getSingleBookById
    , deleteBook
}