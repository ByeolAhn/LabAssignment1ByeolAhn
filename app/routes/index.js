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

/* GET about me page. */
router.get('/aboutMe', function(req, res){
  res.render('about',
  {
      title: 'AboutByeolAhn'
  });
});

/* GET projects page. */
router.get('/projectsPage', function(req, res){
  res.render('projects',
  {
      title: 'Projects by Byeol Ahn'
  });
});

/* GET services page. */
router.get('/servicesPage', function(req, res){
  res.render('services',
  {
      title: 'Services by Byeol Ahn'
  });
});

/* POST request to handle form submission from the 'Contact Me' page and redirect to the home page */
router.post('/submitContactForm', function(req, res) {
  res.redirect('/');
});


module.exports = router;
