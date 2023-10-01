var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('aboutMe',
    {
        title: 'AboutByeolAhn'
    });
});

module.exports = router;