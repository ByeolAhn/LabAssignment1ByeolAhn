var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../app/routes/index');
var usersRouter = require('../app/routes/users');
var homePageRouter = require('../app/routes/homePage');
var aboutMeRouter = require('../app/routes/aboutMe');
var projectsPageRouter = require('../app/routes/projectsPage');
var servicesPageRouter = require('../app/routes/servicesPage');
var contactMeRouter = require('../app/routes/contactMe');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/', homePageRouter);
app.use('/aboutMe', aboutMeRouter);
app.use('/projectsPage', projectsPageRouter);
app.use('/servicesPage', servicesPageRouter);
app.use('/contactMe', contactMeRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
