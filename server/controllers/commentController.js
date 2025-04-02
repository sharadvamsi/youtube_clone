import { commentModel } from "../models/commentModel.js";

export const addComment = async(req,res)=>{
    const{videoId,comment} = req.body;
    const newComment = await commentModel.create({
        videoId,postedOn: new Date(),userId:req.userId,comment
    })
    res.status(201).json(newComment);
}

export const editComment = async(req,res)=>{
    const commentId = req.params.id;
    const {comment} = req.body;
    const updateComment = await commentModel.findOneAndUpdate({_id:commentId},{
        $set:{
            comment
        }
    },{new:true})
    res.status(200).json(updateComment);
}

export const removeComment = async(req,res)=>{
    const commentId = req.params.id;
    const deleteComment = await commentModel.findOneAndDelete({_id:commentId});
    deleteComment? res.status(200).json({message:"Comment deleted succesfully"}):res.status(500).json({message:"Internal server error"})
}

