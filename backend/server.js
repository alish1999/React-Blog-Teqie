require('dotenv').config();
const connectDB= require('./config/db');
const productRoutes =require('./routes/productRoutes');

connectDB();

const express = require('express');
const app = express();

app.use(express.json());

app.use('/ai/products',productRoutes)

const PORT =process.env.PORT || 5000;

app.listen(PORT ,() => console.log(`Server running on ${PORT}`))