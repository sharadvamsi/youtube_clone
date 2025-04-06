import { createVideoData, getChannelNamebyId, getuserNamebyId } from "../helper.js";
import { channelModel } from "../models/channelModel.js";
import { videoModel } from "../models/videoModel.js";

export const getChannelDetails = async(req,res)=>{
    const channelId = req.params.id;
    const data = await channelModel.find({_id:channelId});
    const userName = await getuserNamebyId(data);
    const videosData = await videoModel.countDocuments({channelId});
    const response = {
        channelName:data[0].channelName,
        subscribers:data[0].subscribers,
        userName: userName[0].userName,
        videos:videosData,
    }
    res.status(200).json(response);

}


export const getChannelVideos = async(req,res)=>{
    const channelId = req.params.id;
    const data = await videoModel.find({channelId}).select('_id title duration thumbnail channelId views uploadDate');
    const updatedData = await getChannelNamebyId(data);

    res.status(200).json(updatedData);
}

export const createChannel = async(req,res)=>{
    const {channelName} = req.body;
console.log(req.userId);

    const newChannel = await channelModel.create({
        userId:req.userId,
        channelName,
        subscribers:5000
    })

    await createVideoData(newChannel._id);
    res.status(201).json(newChannel);
    
}

export const getChananelByUserId = async(req,res)=>{
    const data = await channelModel.find({userId:req.userId});
    res.status(200).json(data);
}