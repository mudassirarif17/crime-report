import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";
import multer from "multer";
import generateOtp from '../utils/generateOtp.js';
import "dotenv/config.js"
import nodemailer from "nodemailer";


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
// router.post('/register', upload.single("image") ,async (req, res) => {
//     const { username, email, password } = req.body;
//     const imageName = req.file.filename;

//     try {
//         let user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         user = new User({ 
//             image : imageName,
//             username,
//             email,
//             password
//          });
//         await user.save();

//         const payload = { user: { id: user.id } };

//         jwt.sign(
//             payload,
//             process.env.JWT_SECRET,
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

router.post('/register', upload.single("image"), async (req, res) => {
    const { username, email, password } = req.body;
    const imageName = req.file ? req.file.filename : null;

    try {
        console.log("Email received from client:", email); // Log the email

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const otp = await generateOtp(); // Ensure this returns a string, not a Promise

        user = new User({
            image: imageName,
            username,
            email,
            password,
            otp,
            otpExpires: Date.now() + 3600000, // OTP expires in 1 hour
        });

        await user.save();

        console.log("Sending OTP to:", email); // Log the recipient's email

        // await sendEmail(email, 'Verify Your Email', `Your OTP is ${otp}`);
        const sendEmail = async () => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "mudassirinoxent@gmail.com",
                pass: "varx trax kmxz iyer",
            },
        });
    
        const mailOptions = {
            from: "mudassirinoxent@gmail.com",
            to : email,
            subject : 'Verify Your Email',
            text : `Your OTP is ${otp}`,
        };
    
        await transporter.sendMail(mailOptions);
    

        res.status(200).json({ msg: 'OTP sent to your email' });
    }
    await sendEmail();
    } catch (err) {
        console.error("Error here:", err.message);
        res.status(500).send('Server error');
    }

});


// Verify OTP Route
router.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }

        if (user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ msg: 'Invalid or expired OTP' });
        }

        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;

        await user.save();

        res.status(200).json({ msg: 'Email verified successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});














// Login Route
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Check if all fields are provided
//         if (!email || !password) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         // Check if the email is valid
//         if (!email.includes("@")) {
//             return res.status(400).json({ error: "Please enter a valid email" });
//         }

//         // Find the user by email
//         const user = await User.findOne({ email });
//         // console.log(user);

//         // If user is not found, send a 404 response
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         // Compare the provided password with the stored password
//         const dotMatch = await bcrypt.compare(password, user.password);
//         // console.log(dotMatch);

//         if (!user || !user.isVerified) {
//             return res.status(400).json({ msg: 'Invalid credentials or email not verified' });
//         }

//         // If the password matches, generate a JWT token and send it
//         if (dotMatch || !user.isVerified) {
//             const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//                 expiresIn: "7d",
//             });

//             return res.status(201).json({ token });
//         } else {
//             // If the password doesn't match, send a 404 response
//             return res.status(404).json({ error: "Email and password do not match" });
//         }
//     } catch (error) {
//         console.log(error);
//         // Send a 500 response if an error occurs
//         return res.status(500).send("Internal Server Error");
//     }
// });



// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials or email not verified' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch || !user.isVerified) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         const payload = {
//             user: {
//                 id: user.id,
//             },
//         };

//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//             if (err) throw err;
//             res.status(200).json({ token });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if the user is verified
        if (!user.isVerified) {
            return res.status(400).json({ msg: 'Please verify your email before logging in' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        // Generate JWT token
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});












// Route 3 get a user detail
router.get('/getuser' , authMiddleware ,async (req , res)=>{
    try {
        const userId = req.userId;
        // console.log(userId);
        const user = await User.findById(userId).select("-password");
        res.send(user);
        // res.json({user : user})
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})

router.get('/getalluser',async (req , res)=>{
    try {
        const user = await User.find();
        res.send(user);
        // res.json({user : user})
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})





export default router;
