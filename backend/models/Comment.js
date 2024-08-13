import mongoose , {model} from "mongoose";

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// module.exports = mongoose.model('Comment', CommentSchema);
const Comment = model('comment' , CommentSchema); 
// User.createIndexes();

export default Comment;
