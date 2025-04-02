import jwt from "jsonwebtoken"
import { userModel } from "../models/userModel.js";

export const authUser = (req,res,next)=>{
    const token = req.headers.authorization;
    //verifying token got from req.headers.authorization
    const verifyToken = jwt.verify(token,"secret",async(err,payload)=>{
        if(err) return res.status(401).json({message:"Access denied"});// if token is invalid or expired throw error
        const {email} = payload
        //else getting userId of the user from db and attaching it to req for futher usage.
        const userData = await userModel.findOne({email});
        const userId = userData._id.toString();
        req.userId = userId;
        next();
    })

}