import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface Decoded {
  id: string;
  name: string;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  const secretKey = "sua_chave_secreta";

  if (!token) {
    return res.status(401).json({ message: "Token não enviado" });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as Decoded;
    req.user = decoded;

    next();
  } catch (error: any) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}
