var express = require('express');
var router = express.Router();
var periodico = require('../services/apiNoticias');

/* GET users listing. */
router.get('/noticias', function(req, res, next) {
  
  periodico.getNoticias().then((archi)=>{
    res.send(archi)
    res.end()
  }).catch((err)=>{
    console.log(err)
  })
  
  
});


router.get('/usuarios', (req,res,next)=>{

  res.send({
 pers1:{"id":1,"first_name":"Buffy","last_name":"Kornes","email":"bkornes0@whitehouse.gov","gender":"Female","ip_address":"93.233.127.197"},
 pers2:{"id":2,"first_name":"Clarine","last_name":"Seldon","email":"cseldon1@eepurl.com","gender":"Female","ip_address":"133.16.243.69"},
 pers3:{"id":3,"first_name":"Ximenez","last_name":"French","email":"xfrench2@ocn.ne.jp","gender":"Male","ip_address":"63.160.221.119"},
 pers4:{"id":4,"first_name":"Noach","last_name":"Biasi","email":"nbiasi3@fda.gov","gender":"Male","ip_address":"46.217.241.35"},
 pers5:{"id":5,"first_name":"Nestor","last_name":"Caherny","email":"ncaherny4@blogtalkradio.com","gender":"Male","ip_address":"25.124.133.37"}
  })
})

module.exports = router;