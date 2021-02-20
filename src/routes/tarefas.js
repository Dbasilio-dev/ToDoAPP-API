const express = require("express");
const router = express.Router();
const Tarefas = require("../models/tarefa");

//Busca todos as tarefa.
router.get("/", async (req, res) => {
  try {
    const tarefa = await Tarefas.find();
    res.send(tarefa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Busca uma tarefa.
router.get("/:id", async (req, res) => {
  try {
    const filtredAssignment = await Tarefas.findById(req.params.id);
    res.send(filtredAssignment);
  } catch (err) {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }
});

//Insere uma tarefa.
router.post("/", async (req, res) => {
  const tarefa = new Tarefas({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    status: req.body.status,
    data: req.body.data,
    userId: req.body.userId,
  });
  try {
    const novaTarefa = await tarefa.save();
    res.status(201).json(novaTarefa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Atualiza uma tarefa.
router.patch("/:id", async (req, res) => {
  let filtredAssignment;
  try {
    filtredAssignment = await Tarefas.findById(req.params.id);
  } catch (err) {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }
  if (req.body.titulo != null) {
    filtredAssignment.titulo = req.body.titulo;
  }
  if (req.body.descricao != null) {
    filtredAssignment.descricao = req.body.descricao;
  }
  if (req.body.status != null) {
    filtredAssignment.status = req.body.status;
  }
  if (req.body.data != null) {
    filtredAssignment.data = req.body.data;
  }
  if (req.body.userId != null) {
    filtredAssignment.userId = req.body.userId;
  }

  try {
    const updatedAssignment = await filtredAssignment.save();
    res.json(updatedAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleta uma tarefa
router.delete("/:id", async (req, res) => {
  let filtredAssignment;
  try {
    filtredAssignment = await Tarefas.findById(req.params.id);
  } catch (err) {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }

  try {
    await filtredAssignment.remove();
    res.json({ message: "Tarefa Removida." });
  } catch (err) {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }
});

module.exports = router;
