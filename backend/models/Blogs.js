const mongoose =require("mongoose");

const blogSchema =new mongoose.Schema(
    {
        aid: {
            type: String,
            required:true  
        },
        isDraft: {
            type: String,
            required:true
        },
        title: {
            type: String,
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
      
        createdDate: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
        
    }
)
const Blog = mongoose.model('blogs', blogSchema);

module.exports= Blog;