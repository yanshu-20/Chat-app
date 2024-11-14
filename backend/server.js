// if i want to use import sytnax then what i need to do ??
import express from"express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";


const app= express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// app.get("/",(req,res)=>
//     {
//         // this is route route ..
//         res.send("hello world!!")
// });

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server is Running on port ${process.env.PORT}` 
)});
