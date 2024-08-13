import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crimereport', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Mongo SuccessFully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
