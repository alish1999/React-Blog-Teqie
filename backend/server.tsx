require('dotenv').config();

import blogRoutes from './routes/blogRoutes';
import connectDB from './config/db';
import express from 'express';
import cors from "cors"
const app=express();
app.use(cors());

connectDB();




app.use(express.json());

app.use('/',blogRoutes)

const PORT =process.env.PORT || 5000;

app.listen(PORT ,() => console.log(`Server running on ${PORT}`))