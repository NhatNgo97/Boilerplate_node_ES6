import express from "express";
import authController from "../controllers/authController";

const authRouter = express.Router();

//REGISTER NEW USER
authRouter.post("/register", authController.registerUser);

//LOGIN
authRouter.post("/login", authController.loginUser);

//REFRESH TOKEN
authRouter.post("/refresh", authController.requestRefreshToken);

export default authRouter;
