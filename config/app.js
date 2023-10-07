/* app.js in config folder Byeol Ahn 301288852 Oct 7th 2023 */

// import modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import routes
var allRouter = require('./app/routes/index');

// initialize express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

// use middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// use routes from allRouter
app.use('/', allRouter);




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

// export the app module
module.exports = app;
