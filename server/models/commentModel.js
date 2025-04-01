import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    videoId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    postedOn:{
        type:Date,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

export const commentModel = mongoose.model("Comment",commentSchema);