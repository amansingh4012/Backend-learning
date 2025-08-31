require('dotenv').config()
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes')


const app = express();
let PORT =  Number(process.env.PORT) || 3000;

console.log(`The PORT is: ${process.env.PORT}`); 
console.log(`The PORT is: ${typeof(PORT)}`); 


//connect to our DataBase
connectToDB();

//middleware -> express.json()
app.use(express.json());

// routes here
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
    
});
