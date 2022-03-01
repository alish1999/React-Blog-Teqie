const Product = require ('../models/Product');

const getAllProducts = async(req,res) =>{
    try{
        const products = await Product.find({});
        res.json(products)
    }catch(error)
    {
        console.log(error);
        res.status(500).json({message: "server error while getallProduct"})

    }
}
    const getProductById = async(req,res) =>{
        try{
            const products = await Product.findById(req.params.id);
            res.json(products)
        }catch(error)
        {
            console.log(error);
            res.status(500).json({message: "server error while getbyid"})
    
        }
    }
    const createProduct = async (req,res) => {
    
        try {
            console.log("Product create");
            const Prod = await new Product(req.body);
            Prod.save();
    
            res.status(200).json('Product saved successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    }


module.exports ={
    getAllProducts,
    getProductById,
    createProduct
};