const express =require('express');
const router = express.Router();

const {getAllBlogs,getBlogById, createBlog} =require('../controller/blogControllers');

//@desc GET all blogs form db
//@route GET /api/blogs
//@access Public
router.get('/allblogs',getAllBlogs);


router.post("/create",createBlog);

//@desc GET all blogs form db
//@route GET /api/blogs/:id
//@access Public
router.get('/:id',getBlogById);

module.exports = router;