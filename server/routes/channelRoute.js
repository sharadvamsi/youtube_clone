import express from "express"
import { createChannel, getChannelDetails, getChannelVideos } from "../controllers/channelController.js";
import { authUser } from "../middlewares/auth.js";

const channelRouter = express.Router();

channelRouter.get("/:id",getChannelVideos);
channelRouter.get("/details/:id",getChannelDetails);
channelRouter.post("/create",authUser,createChannel);


export default channelRouter;