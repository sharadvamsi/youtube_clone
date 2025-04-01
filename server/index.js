import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

const app = express();
//connecting to server 
app.listen(1028,()=>{
    console.log("Connected to server on port 1028");
})

app.use(express.json());

//connect to db
mongoose.connect("mongodb://localhost:27017/youtube")
.then(() => console.log("Connected to DB successfully :)"))
.catch((err) => console.error("Connection to DB was unsuccessful:", err));


app.use("/user", userRouter);



