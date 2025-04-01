import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    channelId:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        required:true
    },
    likes:{
        type:Number,
        required:true
    },
    dislikes:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:Array,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    uploadDate:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    }

})

export const videoModel = mongoose.model("video",videoSchema);