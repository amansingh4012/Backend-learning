const express = require('express')
const path = require('path')

const app = express();

// set the view engine 
app.set('view engine', 'ejs')

// set the directory  for the views

app.set('views', path.join(__dirname, 'views'));

const products = [
    {
        id: 1,
        title : 'product 1'
    },
   {
        id: 2,
        title : 'product 2'
    },
    {
        id: 3,
        title : 'product 3'
    },
]

app.get('/',(req,res)=>{
    res.render('home', { tittle: 'Home ', products : products})
});

app.get('/about', (req, res) => {
    res.render('about', { tittle: "About Page" })
})


app.listen(3000, ()=>{
    console.log("port is listening ")
})