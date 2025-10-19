import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await this.userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error: any) {
      return res.status(500).json({ message: error?.message });
    }
  }
  
}
