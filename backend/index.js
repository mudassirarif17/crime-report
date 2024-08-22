import express from 'express';
import connectDB from "./db.js"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";


const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors())
// app.use(cors({ origin: 'http://127.0.0.1:5000' }));


// Define Routes
app.get('/' , (req , res)=>{
  res.send("Hello world");
})

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/posts', commentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
