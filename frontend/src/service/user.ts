import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export async function createUser(params: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await axios.post(baseUrl, params);
  return response;
}
