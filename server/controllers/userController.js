import { userModel } from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const createNewUser = async(req,res)=>{
    const{userName,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await userModel.create({
        userName,email,password:hashedPassword
    })
    const userDetails = await userModel.find({_id:newUser._id}).select('-password');// not sending password in response for security

    res.status(201).json(userDetails);
}

export const login = async(req,res)=>{
    //checking if password provided matches with password in db if no returning error.
    const {user} = req;

    const validatePassword = await bcrypt.compare(req.body.password,user.password)
    if(!validatePassword) return res.status(400).json({message:"Invalid credentials"});
    const {password,...userDetails} = user.toObject(); // not sending password in response for security
   
    //if yes creating jwt token and sending it as response.
    const token = jwt.sign(req.body,"secret",{expiresIn:"50m"});

    res.status(200).json([userDetails,token]);
    
}