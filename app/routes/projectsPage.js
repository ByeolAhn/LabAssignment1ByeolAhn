var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('projectsPage',
    {
        title: 'Projects by Byeol Ahn'
    });
});

module.exports = router;
