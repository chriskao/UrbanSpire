
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var milestone1 = require('./routes/milestone1');
var milestone2 = require('./routes/milestone2');
var milestone3 = require('./routes/milestone3');
var milestone4 = require('./routes/milestone4');
var milestone5 = require('./routes/milestone5');
var milestone6 = require('./routes/milestone6');
var milestone7 = require('./routes/milestone7');
var milestone8 = require('./routes/milestone8');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/milestone1', milestone1.view);
app.get('/milestone2', milestone2.view);
app.get('/milestone3', milestone3.view);
app.get('/milestone4', milestone4.view);
app.get('/milestone5', milestone5.view);
app.get('/milestone6', milestone6.view);
app.get('/milestone7', milestone7.view);
app.get('/milestone8', milestone8.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
