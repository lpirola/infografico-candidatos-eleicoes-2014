'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CandidatoSchema = new Schema({
  cand_id: { type: String },
  image: { type: String },
  nome_urna: { type: String },
  nome_completo: { type: String },
  data_nascimento: { type: Date },
  raca: { type: String },
  nacionalidade: { type: String },
  grau_instrucao: { type: String },
  partido: { type: String },
  nome_coligacao: { type: String },
  coligacao: { type: String },
  numero_processo: { type: String },
  cpnj: { type: String },
  numero: { type: String },
  sexo: { type: String },
  estado_civil: { type: String },
  naturalidade: { type: String },
  ocupacao: { type: String },
  numero_protocolo: { type: String },
  limite_gastos: { type: String },
  updated_at: { type: Date }
});

module.exports = mongoose.model('Candidates', CandidatoSchema);
