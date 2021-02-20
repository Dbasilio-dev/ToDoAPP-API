const express = require("express");
const mongoose = require("mongoose");
const app = express();
const chalk = require("chalk");

module.exports = () => {
  app.use(express.json());
  mongoose.connect(process.env.MONGODB_LOCAL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () =>
    console.log(chalk.green("[INFO]: Conectado ao Banco de Dados!"))
  );
  const usuariosRouter = require("../routes/usuarios");
  const tarefasRouter = require("../routes/tarefas");
  app.use("/usuarios", usuariosRouter);
  app.use("/tarefas", tarefasRouter);

  return app;
};
