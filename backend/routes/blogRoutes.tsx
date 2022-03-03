//const express =require('express');
import express from "express";
const router = express.Router();

const {getAllBlogs,getBlogById, createBlog,deleteBlog ,updateBlog} =require('../controller/blogControllers');


router.get('/allblogs',getAllBlogs);


router.post("/create",createBlog);
router.delete('/delete/:id', deleteBlog);
router.put('/update/:id', updateBlog);
router.get('/get/:id',getBlogById);

//module.exports = router;
export default router;