import express from "express";
import routes from "../routes";
import {
  videoIndex,
  videoDetail,
  videoDelete,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo
} from "../controller/videoConteoller";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// Video
videoRouter.get(routes.videos, videoIndex);

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, videoDelete);

export default videoRouter;
