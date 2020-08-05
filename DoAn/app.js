var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
const bodyParser = require('body-parser');
const pageRouter = require('./routes/pages');
const admiRouter = require('./routes/admi');
const adprRouter = require('./routes/adpr');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const router = require('./routes/pages');


var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// session
app.use(session({
  secret:'youtube_video',
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 60 * 1000 * 30
  }
}));

// Routers
app.use('/', pageRouter);
app.use('/', adprRouter);
app.use('/', admiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
