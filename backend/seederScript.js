require('dotenv').config();

const blogsData =require('./data/blogs');

const connectDB =require("./config/db");

const Blog =require ('./models/Blogs');

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