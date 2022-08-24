import express from "express";
import middlewareController from "../controllers/middlewareController";
import userController from "../controllers/userController";

const userRouter = express.Router();

//GET ALL USERS
userRouter.get(
  "/",
  middlewareController.verifyToken,
  userController.getAllusers
);

//DELETE USER
userRouter.delete(
  "/:id",
  middlewareController.verityTokenAndAdminAuth,
  userController.deleteUser
);

export default userRouter;
