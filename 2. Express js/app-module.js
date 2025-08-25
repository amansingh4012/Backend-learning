const express = require('express');

const App = express();

// application level setings
App.set('view engine', 'ejs')

// routing 
App.get('/',(req,res)=>{
    res.send("homepage")
})

App.post("/api/data",(req,res)=> {
    res.json({
        message : 'data received',
        data :  req.body
    })
})

App.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('something went wrong')
})