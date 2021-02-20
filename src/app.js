const custom = require("./custom/customExpress");
const app = custom();
const port = 8080;
const chalk = require("chalk");
// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 8080;
// const chalk = require("chalk");
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_LOCAL, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () =>
//   console.log(chalk.green("[INFO]: Conectado ao Banco de Dados!"))
// );
// const usuariosRouter = require("./routes/usuarios");
// const tarefasRouter = require("./routes/tarefas");
// app.use("/usuarios", usuariosRouter);
// app.use("/tarefas", tarefasRouter);
app.listen(port, () => {
  console.log(chalk.green(`[INFO]: Servidor rodando na porta:${port}!`));
});
