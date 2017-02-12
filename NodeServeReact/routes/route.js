/**
 * Created by Steven on 2/9/2017.
 */

var express = require('express');
var route = express.Router();

route.get('/', function (req, res) {
  //res.render('partials/example', {object: data});
});

route.post('/', function (req, res, next) {

});

module.exports = route;