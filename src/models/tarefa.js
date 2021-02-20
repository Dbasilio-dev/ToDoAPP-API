const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  descricao: {
    type: String,
    require: true,
  },

  status: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    required: true,
    default: Date.now,
  },

  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("tarefa", tarefaSchema);
