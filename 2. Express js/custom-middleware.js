const express = require('express')

const app = express();

const timeStamp = (req,res,next)=>{
    const TimeStamp = new Date().toISOString();

    console.log(`${TimeStamp} from ${req.method} to ${req.url}`);

    next();
}

app.use(timeStamp);

app.get('/', (req,res)=>{
    res.send("home page")
})

app.get('/dashboard', (req,res)=>{
    res.send("Dashboard")
})

app.listen(3000,()=>{
    console.log('port is listening ')
})