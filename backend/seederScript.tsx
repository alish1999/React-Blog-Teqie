require('dotenv').config();

//const blogsData =require('./data/blogs');
import blogsData from './data/blogs';
//const connectDB =require("./config/db");
import connectDB from './config/db';

//const Blog =require ('./models/Blogs');
import Blog from './models/Blogs'

connectDB();

const importData = async ()=>{
    try{
        await Blog.insertMany(blogsData);
        console.log("data import success");

        process.exit();
    }catch(error)
    {
        console.log(error);
        process.exit(1);
    }
};

importData();