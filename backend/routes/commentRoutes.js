import express from "express";
const router = express.Router();
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import mongoose from 'mongoose';
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

// Add a comment
router.post('/:id/comment', authMiddleware, async (req, res) => {
    const { text } = req.body;
    const {id} = req.params;

    try {
        const post = await Post.findById(req.params.id);
        
        const newComment = new Comment({
            text,
            user: req.userId,
            post: id,
        });
        post.comments.push(req.userId);
        await post.save();

        const comment = await newComment.save();
        res.json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get("/getallcomments/:id" , async (req , res)=>{
    const {id} = req.params;
    try {
        const comment = await Comment.find({post : id}).populate('user');
        // console.log(comment)
        res.json(comment) 
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})

router.get("/getallusercomments" , async (req , res)=>{
    try {
        const comment = await Comment.find();
        // console.log(comment)
        res.json(comment) 
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})



export default router;
