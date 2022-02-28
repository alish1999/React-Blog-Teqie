const Product = require ('../models/Product');

const getAllProducts = async(req,res) =>{
    try{
        const products = await Product.find({});
        res.json(products)
    }catch(error)
    {
        console.erorr(error);
        res.status(500).json({message: "server error while getallpost"})

    }
}
    const getProductById = async(req,res) =>{
        try{
            const products = await Product.findById(req.params.id);
            res.json(products)
        }catch(error)
        {
            console.erorr(error);
            res.status(500).json({message: "server error while getallpost"})
    
        }
    }


module.exports ={
    getAllProducts,
    getProductById
};