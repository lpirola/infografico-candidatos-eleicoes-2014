var express = require('express');
var router = express.Router();
var Candidato = require('../model/Candidato.js')
var async = require('async');


var filter = {
  run : function (where, cb) {
    Candidato.where(where).count(function (e, c) {
      cb(null, c);
    });
  }
}

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
      subtitle:
      'Uma série de visualizações extraídas da base de candidatos'+
      ' disponibilizado pelo TSE, no '+
      '<a href="www.divulgacand2014.tse.jus.br">site</a>. O código-fonte'+
      ' desse site e uma breve história de como e porque criamos, você'+
      'pode encontrar no <a href="https://github.com/lucaspirola/infografico-candidatos-eleicoes-2014">github</a>.',
      title: 'Extrato dos candidatos da eleição de 2014'
    });
});


router.get('/data/sexo', function (req, res) {
    async.series([
       function(cb){
          filter.run({ 'sexo': 'FEMININO' }, cb);
       },
       function(cb){
          filter.run({ 'sexo': 'MASCULINO' }, cb);
       }
    ], function(err,results){
      res.json(results);
    });
});

router.get('/data/estado_civil', function (req, res) {
    async.series([
       function(cb){
          filter.run({ 'estado_civil': 'Divorciado(a)' }, cb);
       },
       function(cb){
          filter.run({ 'estado_civil': 'Casado(a)' }, cb);
       },
       function(cb){
          filter.run({ 'estado_civil': 'Solteiro(a)' }, cb);
       },
       function(cb){
          filter.run({ 'estado_civil': 'Separado(a) judicialmente' }, cb);
       },
       function(cb){
          filter.run({ 'estado_civil': 'Viúvo(a)' }, cb);
       }
    ], function(err,results){
      res.json(results);
    });
});

module.exports = router;
