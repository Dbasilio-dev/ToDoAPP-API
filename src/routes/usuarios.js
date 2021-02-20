const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario");

//Busca todos os usuários.
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.send(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Busca um usuário.
router.get("/:id", getUsers, (req, res) => {
  res.send(res.user);
});

//Insere um usuário.
router.post("/", async (req, res) => {
  const usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  });
  try {
    const novoUsuario = await usuario.save();
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Atualiza um usuário.
router.patch("/:id", getUsers, async (req, res) => {
  if (req.body.nome != null) {
    res.user.nome = req.body.nome;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.senha != null) {
    res.user.senha = req.body.senha;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getUsers, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Usuário removido." });
  } catch (err) {
    res.status(404).json({ message: "Usuário não encontrado." });
  }
});

//middleware para facilitar a busca de usuário por parametro.

async function getUsers(req, res, next) {
  let user;
  try {
    user = await Usuario.findById(req.params.id);
  } catch (err) {
    return res.status(404).json({ message: "Usuário não encontrado." });
  }

  res.user = user;
  next();
}

module.exports = router;
