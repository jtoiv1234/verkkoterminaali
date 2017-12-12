var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/tuote'), //created model loading here
  bodyParser = require('body-parser');
  
app.use(express.static('public'))
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tuoteRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('server started on: ' + port);