const { application } = require("express");
const express = require("express");
const server = express();
const respostas = require("./src/data/respostas.json");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

server.get("/respostas", (req, res) => {
  return res.json(respostas);
});

// Rotas

app.post("/add", function (req, res) {
  req.body.Desafio Coleta- Grx
  res.send("Formulário Recebido!");
});

server.listen(4000, () => {
  console.log("Servidor está funcionando...");
});
