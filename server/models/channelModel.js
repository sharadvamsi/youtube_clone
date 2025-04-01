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
    videos:{
        type:Array,
        required:false,
        default:[]
    }
})

export const channelModel = mongoose.model("channel",channelSchema);