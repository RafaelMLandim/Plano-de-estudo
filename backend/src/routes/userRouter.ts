import { Router } from "express";
import UserController from "../controllers/UserController";
import UserService from "../services/UserService";

const userRouter = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRouter.post("/", (req, res) => userController.createUser(req, res));

export default userRouter;
