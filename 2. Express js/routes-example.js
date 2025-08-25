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

// single products 

app.get('/products/:id', (req,res)=>{
    console.log("req params : ", req.params)
    const productID = parseInt(req.params.id)
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

    const getSingleProduct = products.find(product => product.id ===productID)

    if(getSingleProduct){
        res.json(getSingleProduct)
    }
    else{
        res.status(404).send('product is not found ')
    }

})


const port = 3000;

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})