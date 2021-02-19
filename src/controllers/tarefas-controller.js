module.exports = (app, bd) => {
  app.get("/tarefas", (req, res) => {
    res.send("Rota de tarefas ativada!");
  });

  app.get("/tarefas:id", (req, res) => {
    res.send("Tarefa retornada com sucesso!");
  });

  app.post("/tarefas", (req, res) => {
    res.send("Tarefa inserida com sucesso!");
  });

  app.put("/tarefas:id", (req, res) => {
    res.send("Tarefa atualizada com sucesso!");
  });

  app.delete("/tarefas:id", (req, res) => {
    res.send("Tarefa deletada com sucesso!");
  });
};
