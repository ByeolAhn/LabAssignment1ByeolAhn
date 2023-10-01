var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('homePage',
    {
        title: 'ByeolAhn Portfolio'
    });
});

module.exports = router;