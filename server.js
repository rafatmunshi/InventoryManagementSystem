const express = require('express');
const bodyParser = require('body-parser');
const log= require('morgan')('dev');
var properties = require('./config/db.properties');
var db = require('./config/db.config');


//Item Routes
var itemRoutes = require('./src/routes/items.routes');
const app = express(); // create express app

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use() middleware
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

 // Error handling
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
 next();
});

// use express router
app.use('/api',router);
//call items routing
itemRoutes(router);


app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})