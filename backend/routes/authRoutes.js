import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import "dotenv/config.js"
import authMiddleware from "../middleware/authMiddleware.js";




const router = express.Router();

// Multer Code 
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


// Register route
router.post('/register', upload.single("image") ,async (req, res) => {
    const { username, email, password } = req.body;
    const imageName = req.file.filename;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ 
            image : imageName,
            username,
            email,
            password
         });
        await user.save();

        const payload = { user: { id: user.id } };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid Credentials' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid Credentials' });
//         }

//         const payload = { user: { id: user.id } };

//         jwt.sign(
//             payload,
//             'your_jwt_secret',
//             { expiresIn: 3600 },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token });
//             }
//         );
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });


// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the email is valid
        if (!email.includes("@")) {
            return res.status(400).json({ error: "Please enter a valid email" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        console.log(user);

        // If user is not found, send a 404 response
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare the provided password with the stored password
        const dotMatch = await bcrypt.compare(password, user.password);
        console.log(dotMatch);

        // If the password matches, generate a JWT token and send it
        if (dotMatch) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });

            return res.status(201).json({ token });
        } else {
            // If the password doesn't match, send a 404 response
            return res.status(404).json({ error: "Email and password do not match" });
        }
    } catch (error) {
        console.log(error);
        // Send a 500 response if an error occurs
        return res.status(500).send("Internal Server Error");
    }
});


// Route 3 get a user detail
router.get('/getuser' , authMiddleware ,async (req , res)=>{
    try {
        const userId = req.userId;
        console.log(userId);
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})





export default router;
