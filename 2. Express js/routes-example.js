const express =require('express')

const app = express();

app.get('/', (req,res)=> {
    res.send('homepage')
})


app.get('/products',(req,res)=>{
    const products = [{
        id : 1,
        'label' : 'product 1'
    },

    {
        id : 2,
        'label' : 'product 2'
    },

    {
        id : 3,
        'label' : 'product 3'
    }]

    res.json(products);
})


const port = 3000;

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})