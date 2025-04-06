import { videoModel } from './../models/videoModel.js';
import { channelModel } from './../models/channelModel.js';
import { commentModel } from '../models/commentModel.js';
import { getChannelNamebyId, getuserNamebyId } from '../helper.js';


//helper function



export const getAllVideos = async (req,res)=>{

    const data = await videoModel.find({}).select('_id title duration thumbnail channelId views uploadDate videoUrl category');

    const updatedData = await getChannelNamebyId(data);
    
    res.status(200).json(updatedData);
    
}



export const getVideobyCategory = async(req,res)=>{
    const category = req.params.id;
    const data = await videoModel.find({category}).select('_id title duration thumbnail channelId views uploadDate category');
    const updatedData = await getChannelNamebyId(data);
    res.status(200).json(updatedData);
}

export const getVideoDetails = async(req,res)=>{
    const videoId = req.params.id;
    const videoData = await videoModel.find({_id:videoId});
    const channelData = await channelModel.find({_id:videoData[0].channelId});
    const commentsData = await commentModel.find({videoId});
    const updatedCommentsData = await getuserNamebyId(commentsData);

    const response = {
        videoUrl: videoData[0].videoUrl,
        channelId: videoData[0].channelId,
        title:videoData[0].title,
        channelName:channelData[0].channelName,
        likes:videoData[0].likes,
        dislikes:videoData[0].dislikes,
        views:videoData[0].views,
        description:videoData[0].description,
        subscribers: channelData[0].subscribers,
        comments:updatedCommentsData
    }
    res.status(200).json(response)
    
}

export const editVideoDetails = async(req,res)=>{
    const videoId = req.params.id;
    const updateFields = req.body;
    const updateData = await videoModel.findByIdAndUpdate({_id:videoId},{
        $set:{
            ...updateFields
        }
    },{new:true})
    res.status(200).json(updateData);
    
}

export const deleteVideo = async(req,res)=>{
    const videoId = req.params.id;
    const removeVideo = await videoModel.findOneAndDelete({_id:videoId});
    removeVideo ? res.status(200).json({message:"Video Deleted succesfully"}):res.status(500).json({message:"Internal Server error"})
}