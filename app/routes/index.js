/* index.js in app/routes Byeol Ahn 301288852 Oct 7th 2023 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('home',
  {
      title: 'ByeolAhn Portfolio'
  });
});

/* GET contact me page. */
router.get('/contactMe', function(req, res){
  res.render('contact',
  {
      title: 'ContactByeolAhn'
  });
});



module.exports = router;
