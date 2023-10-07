/* index.js in app/routes Byeol Ahn 301288852 Oct 7th 2023 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('homePage',
  {
      title: 'ByeolAhn Portfolio'
  });
});

/* GET about me page. */
router.get('/', function(req, res){
  res.render('aboutMe',
  {
      title: 'AboutByeolAhn'
  });
});

/* GET projects page. */
router.get('/', function(req, res){
  res.render('projectsPage',
  {
      title: 'Projects by Byeol Ahn'
  });
});

/* GET services page. */
router.get('/', function(req, res){
  res.render('servicesPage',
  {
      title: 'Services by Byeol Ahn'
  });
});


/* GET contact me page. */
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
