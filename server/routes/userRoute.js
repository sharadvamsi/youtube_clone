import express from "express"
import { loginValidation, registerValidation } from "../middlewares/user.js";
import { createNewUser, login } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/register",registerValidation, createNewUser);//added registerValidation middleware to validate input data.
userRouter.post("/login",loginValidation, login);// added loginValidation middleware to validate input data.

export default userRouter;