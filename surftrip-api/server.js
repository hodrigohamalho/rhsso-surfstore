var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

var routes = require('./api/routes'); //importing route
routes(app); //register the route