const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    require: true,
  },

  senha: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("usuario", usuarioSchema);
