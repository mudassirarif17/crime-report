import express from "express";
const router = express.Router();
import Post from "../models/Post.js";
import multer from "multer";
import authMiddleware from "../middleware/authMiddleware.js";

const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , "../src/images");
    },
    filename : function(req , file , cb){
        const uniqueSuffix = Date.now();
        cb(null , uniqueSuffix + file.originalname)
    }
})

const upload = multer({storage : storage});

// Get all posts
router.get("/getallposts" , async (req , res)=>{
    try {
        const notes = await Post.find();
        res.json(notes) 
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})

// Route get post by id
router.get("/getpostbyid/:id" , async (req , res)=>{
    const {id} = req.params;

    try {
       let notes = await Post.findById({_id : id});
       if(notes){
        return res.status(200).json(notes)
       }
       else{ 
        return res.status(401).json({error : "Not Found"})
       }
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})


// Create a post
router.post('/add_post', authMiddleware , upload.single("image") , async (req, res) => {
    const { title, description } = req.body;
    const imageName = req.file.filename;

    try {
        const newPost = new Post({
            image : imageName,
            title,
            description,
            user: req.userId,
        });

        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error("my error" + err.message);
        res.status(500).send('Server error');
    }
});

// Like a post
router.put('/like/:id', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.includes(req.userId)) {
            return res.status(400).json({ msg: 'Post already liked' });
        }

        post.likes.push(req.userId);
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

        if (post.dislikes.includes(req.userId)) {
            return res.status(400).json({ msg: 'Post already disliked' });
        }

        post.dislikes.push(req.userId);
        await post.save();

        res.json(post.dislikes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// module.exports = router;
export default router;
