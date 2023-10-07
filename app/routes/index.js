/* index.js in app/routes Byeol Ahn 301288852 Oct 7th 2023 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('homePage',
  {
      title: 'ByeolAhn Portfolio'
  });
});


module.exports = router;
