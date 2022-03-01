const mongoose =require("mongoose");

const productSchema =new mongoose.Schema(
    {
        aid: {
            type: String,
            required:true  
        },
        isDraft: {
            type: String,
            default: 0,
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
const Product = mongoose.model('Product', productSchema);

module.exports= Product;