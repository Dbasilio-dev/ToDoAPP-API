// require("dotenv").config({ path: __dirname + "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const chalk = require("chalk");

// const usuariosController = require("./controllers/usuarios-controller");
// const tarefasController = require("./controllers/tarefas-controller");
// const mainController = require("./controllers/main-controller");

// usuariosController(app);
// tarefasController(app);
// mainController(app);

mongoose.connect("mongodb://localhost/ToDo", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () =>
  console.log(chalk.green("[INFO]: Conectado ao Banco de Dados!"))
);

app.listen(port, () => {
  console.log(chalk.green(`[INFO]: Servidor rodando na porta:${port}!`));
});
