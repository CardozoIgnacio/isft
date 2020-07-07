var express = require('express');
var router = express.Router();
var periodico = require('../services/apiNoticias');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  periodico.getNoticias().then((archi)=>{
    res.send(archi)
    res.end()
  }).catch((err)=>{
    console.log(err)
  })
  
  
});

module.exports = router;