module.exports = (app, bd) => {
  app.get("/usuarios", (req, res) => {
    res.send("Rota de usuários ativada!");
  });

  app.get("/usuarios:email", (req, res) => {
    res.send("Usuario retornado com sucesso!");
  });

  app.post("/usuarios", (req, res) => {
    res.send("Usuario inserido com sucesso!");
  });

  app.put("/usuarios:email", (req, res) => {
    res.send("Usuario atualizado com sucesso");
  });

  app.delete("/usuarios:email", (req, res) => {
    res.send("Usuario deletado com sucesso!");
  });
};
