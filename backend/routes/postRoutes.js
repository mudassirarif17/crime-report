import express from "express";
const router = express.Router();
import Post from "../models/Post.js";
import authMiddleware from "../middleware/authMiddleware.js";



router.get("/getallposts" , async (req , res)=>{
    try {
        const notes = await Post.find();
        res.json(notes) 
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})


// Create a post
router.post('/add_post', authMiddleware, async (req, res) => {
    const { title, description } = req.body;

    try {
        const newPost = new Post({
            title,
            description,
            user: req.user.id,
        });

        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Like a post
router.put('/like/:id', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.includes(req.user.id)) {
            return res.status(400).json({ msg: 'Post already liked' });
        }

        post.likes.push(req.user.id);
        await post.save();

        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Dislike a post
router.put('/dislike/:id', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.dislikes.includes(req.user.id)) {
            return res.status(400).json({ msg: 'Post already disliked' });
        }

        post.dislikes.push(req.user.id);
        await post.save();

        res.json(post.dislikes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// module.exports = router;
export default router;
