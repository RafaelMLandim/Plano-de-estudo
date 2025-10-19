import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export default class AuthControler {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await this.authService.login({ email, password });
      return res.status(200).json({token});
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ error: error.message || "Erro no login" });
    }
  }
}
