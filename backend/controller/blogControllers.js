const blogs = require('../data/blogs');
const Blog = require ('../models/Blogs');

const createBlog = async (req,res) => {
    
    try {
        console.log("Blog created");
        const cBlog = await new Blog(req.body);
        cBlog.save();

        res.status(200).json('Blog saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}
 const deleteBlog = async (req, res) => {
    console.log("Blog deleted");
    try {
        
        await Blog.findByIdAndDelete(req.params.id);
     
        res.status(200).json('blog deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateBlog = async(req,res) =>{
    try{
 
        await Blog.findByIdAndUpdate(req.params.id,req.body,{overwrite:true})
        res.status(200).json('blog updated successfully');
    }catch(error)
    {
        res.status(500).json(error)

    }
}

const getAllBlogs = async(req,res) =>{
    try{
        const gblogs = await Blog.find({});
        res.json(gblogs)
    }catch(error)
    {
        console.log(error);
        res.status(500).json({message: "server error while getallBlog"})

    }
}
    const getBlogById = async(req,res) =>{
        try{
            const blogs = await Blog.findById(req.params.id);
            res.json(blogs)
        }catch(error)
        {
            console.log(error);
            res.status(500).json({message: "server error while getbyid"})
    
        }
    }



module.exports ={
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlog,
    updateBlog
};