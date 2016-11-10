var express = require('express');
var app = express();
var PORT = 8080;

// configure to use static pages
app.use(express.static('public'));

// basic response on page load
app.get('/', function(req, res) {
  console.log("Get request from the / root in the app.js file");
  res.send('This is from the app.js file');
})

// the server is listening
app.listen(PORT, function() {
  console.log('server is running on port', PORT);
})
