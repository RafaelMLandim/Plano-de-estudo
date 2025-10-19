import mongoose from "mongoose";

export default async function conectMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/listadetarefas");
    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
  }
}
