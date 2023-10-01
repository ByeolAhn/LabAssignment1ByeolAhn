var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('servicesPage',
    {
        title: 'Services by Byeol Ahn'
    });
});

module.exports = router;
