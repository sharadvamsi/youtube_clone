import express from "express";
import mongoose from "mongoose";

const app = express();
//connecting to server 
app.listen(1028,()=>{
    console.log("Connected to server on port 1028");
})

//connect to db
mongoose.connect("mongodb://localhost:27017/youtube")
.then(() => console.log("Connected to DB successfully :)"))
.catch((err) => console.error("Connection to DB was unsuccessful:", err));;



