
import  express  from 'express';
import { deleteVideo, editVideoDetails, getAllVideos, getVideobyCategory, getVideoDetails } from '../controllers/videoController.js';
import { authUser } from '../middlewares/auth.js';
const videoRouter = express.Router();

videoRouter.get("/",getAllVideos);
videoRouter.get("/:id",getVideoDetails);
videoRouter.get("/category/:id",getVideobyCategory);
videoRouter.put("/:id",authUser,editVideoDetails);
videoRouter.delete("/:id",authUser,deleteVideo);


export default videoRouter;