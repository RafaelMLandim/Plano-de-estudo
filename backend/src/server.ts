import express, { Router } from "express";
import conectMongo from "./database/conectMongo";
import routers from "./routes";

const app = express();

app.use(express.json());
app.use(routers);

conectMongo()
  .then()
  .catch((error) => console.error(error));

app.listen(3000, () => {
  console.log(`Servidor Rodando na porta ${3000}`);
});
//como vai ficar linkado as tasks do usuário se não tem o USERID -->não sei como vou fazer para salvar que uma tarefa ja foi feita ou n pq n tem esse user id
// usar biblioteca JWT para gerar token-->na service do auth