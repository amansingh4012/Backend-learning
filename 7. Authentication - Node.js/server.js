require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db')
const authRoutes = require('./routes/auth-routes')

const app = express();
const PORT = (process.env.PORT) || 3000;

connectToDB();

app.use(express.json())


app.use('/api/auth',authRoutes);




app.listen(PORT, ()=> {
    console.log(`serrver is listening at port ${PORT}`)
})

