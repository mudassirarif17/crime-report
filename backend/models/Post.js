import mongoose , {model} from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image : {
        type : String,
        null : true,
        default : "1724097132294cuboid.png"
    },
    region : {
        type: String,
        required : true,
    },
    category : {
        type : String,
        required : true
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    date: {
        type: Date,
        default: Date.now,
    },
});

// module.exports = mongoose.model('Post', PostSchema);
const Post = model('post' , PostSchema); 


export default Post;
