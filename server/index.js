import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv"
import videoRouter from "./routes/videoRoutes.js";
import commentRouter from "./routes/commentRoute.js";
import channelRouter from "./routes/channelRoute.js";

const app = express();
//connecting to server 
app.listen(1028,()=>{
    console.log("Connected to server on port 1028");
})

app.use(express.json());
dotenv.config();

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to DB successfully :)"))
.catch((err) => console.error("Connection to DB was unsuccessful:", err));


app.use("/user", userRouter);
app.use("/video",videoRouter);
app.use("/comment",commentRouter);
app.use("/channel",channelRouter);



