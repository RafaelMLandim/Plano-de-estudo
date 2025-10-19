import { Router } from "express";
import taskRouter from "./taskRouters";
import userRouter from "./userRouter";
import authRouter from "./authRouter";

const routers = Router();

routers.use("/tasks", taskRouter);
routers.use("/users", userRouter);
routers.use("/auth", authRouter);

export default routers;
