var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('contactMe',
    {
        title: 'ContactByeolAhn'
    });
});

module.exports = router;