const mongoose =require("mongoose");

const productSchema =new mongoose.Schema(
    {
        id: {
            type: Number,
            required:true  
        },
        aid: {
            type: Number,
            required:true  
        },
        isDraft: {
            type: Number,
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
const Product = mongoose.model('product', productSchema);

module.exports= Product;