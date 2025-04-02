import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    channelName:{
        type:String,
        required:true
    },
    subscribers:{
        type:Number,
        required:true,
    }
})

export const channelModel = mongoose.model("channel",channelSchema);