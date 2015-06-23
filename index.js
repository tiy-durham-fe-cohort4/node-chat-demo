'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Parse application/json requests properly
app.use(bodyParser.json());

// Serve all assets in the src folder
app.use(express.static(__dirname + '/src'));

// TODO: Move this logic into its own file

var messages = [];

// When the user does an HTTP post to /api/messages,
// we will add their JSON object to our messages array
app.post('/api/messages', function (req, res) {
  // req.body is how you get the data that the user is sending
  messages.push(req.body);
  
  // res.json is how you send JSON back to the user
  res.json(req.body);
});

// When the user does an HTTP get to /api/messages,
// we will send them our messages array
app.get('/api/messages', function (req, res) {
  res.json(messages);
});

// Starting our router/applicatin listening on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});