import express from "express";
import routes from "../routes";
import { videoIndex, videoUpload, videoDetail, videoEdit, videoDelete } from "../controller/videoConteoller";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videoIndex);
videoRouter.get(routes.upload, videoUpload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, videoEdit);
videoRouter.get(routes.deleteVideo, videoDelete);

export default videoRouter;