const express = require("express");
const app = express();
const port = 8080;
const chalk = require("chalk");

const usuariosController = require("./controllers/usuarios-controller");
const tarefasController = require("./controllers/tarefas-controller");
const mainController = require("./controllers/main-controller");

usuariosController(app);
tarefasController(app);
mainController(app);

app.listen(port, () => {
  console.log(chalk.green(`[INFO]: API rodando na porta:${port} com sucesso!`));
});
