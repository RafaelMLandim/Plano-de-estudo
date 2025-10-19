import axios from "axios";

const baseUrl = "http://localhost:3000/tasks";

export async function getTask() {
  const response = await axios.get(baseUrl);

  return response.data;
}
export async function getTaskById(id: string) {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
}

export async function creatTask(params: {
  title: string;
  description: string;
}) {
  const response = await axios.post(baseUrl, params);

  return response.data;
}

export async function deleteTask(id: string) {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
}

export async function updateTask(params: {
  id: string;
  title: string;
  description: string;
}) {
  try {
    const response = await axios.put(`${baseUrl}/${params.id}`, {
      title: params.title,
      description: params.description,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar tarefa", error);
    throw error;
  }
}
