import express from "express";
import routes from "../routes";
import { videoIndex, videoDetail, videoEdit, videoDelete, getUpload, postUpload } from "../controller/videoConteoller";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videos, videoIndex);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, videoEdit);
videoRouter.get(routes.deleteVideo, videoDelete);

export default videoRouter;