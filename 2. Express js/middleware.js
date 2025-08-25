const express = require("express")

const app = express();

const myFirstMiddleware = (req,res,next) =>{
    console.log('this is middleware will run on every request');

    next();

}

app.use(myFirstMiddleware);

app.get('/', (req,res)=>{
    res.send("home page")
})

app.get('/dashboard', (req,res)=>{
    res.send("Dashboard")
})

app.listen(3000,()=>{
    console.log('port is listening ')
})