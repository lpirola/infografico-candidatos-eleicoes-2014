var express = require('express');
var router = express.Router();
var Candidato = require('../model/Candidato.js')
var async = require('async');

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
    var data = {
      masculino : 0,
      feminino : 0
    };
    async.series([
       function(cb){
          Candidato.where({ 'sexo': 'FEMININO' }).count(function (e, c) {
            data.feminino = c;
            cb(null, c);
          });
       },
       function(cb){
          Candidato.where({ 'sexo': 'MASCULINO' }).count(function (e, c) {
            data.masculino = c;
            cb(null, c);
          });
       }
    ], function(err,results){
      res.json(data);
    });


});

module.exports = router;
