import express from "express"
import { addComment, editComment, getAllComments, removeComment } from "../controllers/commentController.js";
import { authUser } from "../middlewares/auth.js";

const commentRouter = express.Router();

commentRouter.post("/add",authUser,addComment);
commentRouter.patch("/:id",authUser,editComment);
commentRouter.delete("/:id",authUser,removeComment);
commentRouter.get("/:id",getAllComments);


export default commentRouter;

