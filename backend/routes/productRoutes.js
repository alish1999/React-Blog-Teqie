const express =require('express');
const router = express.Router();

const {getAllProducts,getProductById, createProduct} =require('../controller/productControllers');

//@desc GET all blogs form db
//@route GET /api/products
//@access Public
router.get('/allblogs',getAllProducts);


router.post("/create",createProduct);

//@desc GET all blogs form db
//@route GET /api/products/:id
//@access Public
router.get('/:id',getProductById);

module.exports = router;