import axios from "axios";

const baseUrl = "http://localhost:3000/auth";

export async function login(params: { email: string; password: string }) {
  const response = await axios.post(baseUrl, params);
  return response.data;
}
