require('dotenv').config({debug: false})
const express = require('express');
const connectToDB = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3000;

//connect to our DataBase
connectToDB();

//middleware -> express.json()

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
})


