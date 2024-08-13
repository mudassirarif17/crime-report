import express from "express";
const router = express.Router();
import Comment from "../models/Comment.js";
import authMiddleware from "../middleware/authMiddleware.js";

// Add a comment
router.post('/:id/comment', authMiddleware, async (req, res) => {
    const { text } = req.body;

    try {
        const newComment = new Comment({
            text,
            user: req.user.id,
            post: req.params.id,
        });

        const comment = await newComment.save();
        res.json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// module.exports = router;
export default router;
