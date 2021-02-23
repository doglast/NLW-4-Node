import express, { request } from 'express';

const app = express();

app.get("/", (request, response)=>{
  return response.json({ message: "Salve rei" })
})

app.post("/", (request, response)=>{
  return response.json({ message: "tá tudo em casa cria, tudo salvo" })
})

app.listen(3333,  () => console.log("Rodando!"));
