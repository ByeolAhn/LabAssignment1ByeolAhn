var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('contactMe',
    {
        title: 'ContactByeolAhn'
    });
});

router.post('/submitContactForm', function(req, res) {
    res.redirect('/');
});

module.exports = router;