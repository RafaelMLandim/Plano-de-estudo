import { Request, Response } from "express";
import TaskService from "../services/TaskService";

export default class TaskController {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  async getAllTask(req: Request, res: Response) {
    try {
      const tasks = await this.taskService.getAllTask();

      return res.status(200).json({ tasks });
    } catch (error) {
      console.error(error);
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const newTask = await this.taskService.createTask({
        ...req.body,
        userId: req.user.id,
      });
      return res.status(201).json({ task: newTask });
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      await this.taskService.deleteTask({
        id: req.params.id,
        userId: req.user.id,
      });
      return res.status(200).json({ message: "Tarefa deletada com sucesso" });
    } catch (error) {
      console.error(error);
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.taskService.updateTask({ id, ...req.body });
      return res.status(200).json({ message: "Tarefa Atualizada com sucesso" });
    } catch (error) {
      console.error(error);
    }
  }
}
