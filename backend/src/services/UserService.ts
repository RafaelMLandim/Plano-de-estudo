import { userModel } from "../models/users";
import bcrypt from "bcrypt";

export default class UserService {
  constructor() {}

  async createUser(params: { name: string; email: string; password: string }) {
    const userExist = await userModel.findOne({ email: params.email });

    if (userExist) {
      throw new Error("email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(params.password, 10);
    const newUser = await userModel.create({
      ...params,
      password: hashedPassword,
    });
    const { name, email } = newUser;
    return { name, email };
  }
}
