const express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

const app = express();
const port = 3000;
//Routing modules
var reactTry_ROUTING = require('./routes/reactTry.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

var options = {
  root : __dirname + '/public/'
};

//Routing
reactTry_ROUTING(app, options);

app.listen(port, function(err) {
  if(err) {
    return console.log('something bad happened', err);
  }
  console.log('Server listening on ' + port);
});
