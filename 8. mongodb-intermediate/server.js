require('dotenv').config();
const express = require('express')
const connectToDB = require('./database/db') 
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes')
const bookRoutes = require("./routes/book-routes");
const PORT = (process.env.PORT) || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('mongodb connected successfully'))
                                         .catch((e)=> console.error('mongodb connection failed' ,))

//middleware 
app.use(express.json());

app.use('/products', productRoutes);
app.use("/reference", bookRoutes);

//connectToDB();

app.listen(PORT, ()=> {
    console.log(`server is listening at port ${PORT}`);
})

