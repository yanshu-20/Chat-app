import mongoose from "mongoose";
// how would you connect to the mongo db priyanshu ,...

const connectToMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("Connected to MongoDB")
        
    } catch (error) {
        console.log("Error connecting to mongoDB",error.message);
        
    }
};
export default connectToMongoDB;