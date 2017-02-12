/**
 * Created by Steven on 2/9/2017.
 */

var express = require('express');
var engine = require('ejs-mate');
var route = require('./routes/route');

//var exampleRoute = require('./routes/exampleRoute');

var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('/views', __dirname + '/views');


//app.use('/example', exampleRoute);


app.get('/', function (req, res) {
  res.sendFile(_dirname + '/build/index.html');
});

app.listen(3000, function () {
  console.log("Listening on 3000")
});