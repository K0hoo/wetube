import express from "express";
import routes from "../routes";
import {
  userIndex,
  userEdit,
  userChangePassword,
  userDetail
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, userIndex);
// 'edit' and 'change password' should precede 'detail' to work.
userRouter.get(routes.editProfile, onlyPrivate, userEdit);
userRouter.get(routes.changePassword, onlyPrivate, userChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
