import express from "express";
import routes from "../routes";
import { videoIndex, videoDetail, videoDelete, getUpload, postUpload, getEditVideo, postEditVideo } from "../controller/videoConteoller";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Video
videoRouter.get(routes.videos, videoIndex);

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo)

// Delete Video
videoRouter.get(routes.deleteVideo(), videoDelete);

export default videoRouter;