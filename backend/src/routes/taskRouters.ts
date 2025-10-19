import { Router } from "express";
import TaskController from "../controllers/TaskController";
import TaskService from "../services/TaskService";
import { authMiddleware } from "../middlewares/authMiddleware";

const taskRouter = Router();
const taskService = new TaskService();
const taskController = new TaskController(taskService);

taskRouter.get("/", authMiddleware, (req, res) =>
  taskController.getAllTask(req, res)
);
taskRouter.post("/", authMiddleware, (req, res) =>
  taskController.createTask(req, res)
);
taskRouter.delete("/:id", authMiddleware, (req, res) =>
  taskController.deleteTask(req, res)
);
taskRouter.put("/:id", authMiddleware, (req, res) =>
  taskController.updateTask(req, res)
);

export default taskRouter;
