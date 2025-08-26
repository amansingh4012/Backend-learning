const express = require('express')
const app = express();

// Middle ware 
app.use(express.json())

let BOOKs = [
    {
        id : '1',
        title : 'book 1'
    },
    {
        id : '2',
        title : 'book 2'
    },
]

// routes 

app.get('/', (req, res)=>{
    res.json({
        message : "wellcome to book store Api"
    })
})

app.get('/get', (req,res)=>{
    res.json(BOOKs)
})

app.get('/get/:id', (req,res)=> {
    const book = BOOKs.find( item => item.id === req.params.id);
    if(book){
        res.status(200).json(book)
    }
    else res.status(404).json({
        message : 'books is not found , enter valid book id'
    })
})

// add new book

app.post('/add', (req,res)=> {
    const newBook = {
        id : BOOKs.length + 1,
        title: `book ${BOOKs.length+1}`
    }
    BOOKs.push(newBook);
    res.status(200).json({
        data: newBook,
        message: "New book added successfully"
    })
})

// update-books

app.put('/update/:id',(req,res)=>{
    const BookTOupdate = BOOKs.find(item => item.id=== req.params.id)

 if(BookTOupdate){
    // Check if req.body exists before accessing its properties
    if(req.body && req.body.title) {
        BookTOupdate.title = req.body.title;
    }
    res.status(200).json({
        message: `books with ID ${req.params.id}`,
        data: BookTOupdate
    })
}


    else{
        res.status(404).json({
            message : "book not found"
        })
    }
})


// delete a book from books

app.delete('/delete/:id', (req, res) => {
    const bookIndex = BOOKs.findIndex(book => book.id === req.params.id);
    
    if(bookIndex !== -1){
        const deletedBook = BOOKs.splice(bookIndex, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            data: deletedBook[0]
        });
    } else {
        res.status(404).json({
            message: "Book not found"
        });
    }
});





// port for listening 
const port = 3000;

app.listen(port, ()=>{
    console.log('server is runing now ')
})