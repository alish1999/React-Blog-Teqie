require('dotenv').config();
const connectDB= require('./config/db');
const blogRoutes =require('./routes/blogRoutes');
const express = require('express');
const cors =require("cors");
const app=express();
app.use(cors());

connectDB();




app.use(express.json());

app.use('/',blogRoutes)

const PORT =process.env.PORT || 5000;

app.listen(PORT ,() => console.log(`Server running on ${PORT}`))