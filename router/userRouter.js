import express from "express";
import routes from "../routes";
import { userIndex, userEdit, userChangePassword, userDetail } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.users, userIndex);
// 'edit' and 'change password' should precede 'detail' to work.
userRouter.get(routes.editProfile, userEdit);
userRouter.get(routes.changePassword, userChangePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;