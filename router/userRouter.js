import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users"));
// 'edit' and 'change password' should precede 'detail' to work.
userRouter.get(routes.editProfile, (req, res) => res.send("edit profile"));
userRouter.get(routes.changePassword, (req, res) => res.send("change password"));
userRouter.get(routes.userDetail, (req, res) => res.send("users detail"));

export default userRouter;