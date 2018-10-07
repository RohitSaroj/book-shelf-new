//To load config
require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const bookDetails = require('./routes/book-detail');
const app = express();

//view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routers path
app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));
app.use('/css', express.static(path.join(__dirname, 'css')));


app.use(express.static(path.join(__dirname, 'dist')));
app.use('/bookDetail', bookDetails);
app.use('*', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;