import { Router } from "express";
import AuthService from "../services/AuthService";
import AuthControler from "../controllers/AuthControler";

const authRouter = Router();
const authService = new AuthService();
const authControler = new AuthControler(authService);

authRouter.post("/", (req, res) => authControler.login(req, res));

export default authRouter;
