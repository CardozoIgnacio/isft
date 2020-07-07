var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var noticiasRouter = require('./routes/noticias') ;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var history = require('connect-history-api-fallback');
//app.use(history());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/noticias',noticiasRouter);

// Middleware para Vue.js router modo history

//app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
