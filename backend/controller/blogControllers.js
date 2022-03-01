const Blog = require ('../models/Blogs');

const getAllBlogs = async(req,res) =>{
    try{
        const blogs = await Blog.find({});
        res.json(blogs)
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
    const createBlog = async (req,res) => {
    
        try {
            console.log("Blog create");
            const tmpBlog = await new Blog(req.body);
            tmpBlog.save();
    
            res.status(200).json('Blog saved successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    }


module.exports ={
    getAllBlogs,
    getBlogById,
    createBlog
};