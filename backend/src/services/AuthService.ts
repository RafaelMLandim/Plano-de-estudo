import { userModel } from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class AuthService {
  private secretKey = "sua_chave_secreta";
  constructor() {}

  async login(params: { email: string; password: string }) {
    const user = await userModel.findOne({ email: params.email });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const isMach = await bcrypt.compare(params.password, user.password);

    if (!isMach) {
      throw new Error("Senha inválida");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      this.secretKey,
      { expiresIn: "7d" }
    );

    return token;
  }
}
