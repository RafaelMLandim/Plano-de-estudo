import { error } from "console";
import { TaskModel } from "../models/task";

export default class TaskService {
  constructor() {}

  async getAllTask() {
    const tasks = await TaskModel.find({});

    return tasks;
  }

  async createTask(params: {
    description: string;
    title: string;
    userId: string;
  }) {
    const newTask = await TaskModel.create(params);
    return newTask;
  }

  async deleteTask(params: { id: string; userId: string }) {
    const task = await TaskModel.findById(params.id);
    if (!task) {
      throw new Error("Tarefa não encontrada");
    }
    if (task.userId !== params.userId) {
      throw new Error("Você não é o dono desta tarefa");
    }
    await TaskModel.findByIdAndDelete(task);
  }

  async updateTask(params: { id: string; description: string; title: string }) {
    const { id, ...rest } = params;
    const updateTask = await TaskModel.findByIdAndUpdate(id, rest);
    if (!updateTask) {
      throw new Error("Tarefa não encontrada");
    }
  }
}
