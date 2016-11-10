var express = require('express');
var app = express();
var PORT = 8080;
var fs = require('fs');

app.set('views', './views');
app.set('view engine', 'pug');

// configure to use static pages
app.use(express.static('public'));

// basic response on page load
app.get('/', function(req, res) {
  console.log("I'm in the top level function");
  res.render('home', {title: 'home', message: 'In the home directory'});
})

// pull up the index page
app.get('/index', function(req, res) {
  console.log("Display the contents of the /index page");
  fs.readdir('../../', function(err, files)
  {
    if (err) throw err;
    console.log(files);
    res.render('index', { title: 'Index', message: files });
  })
})

// read the cpu information
app.get('/cpu', function(req, res) {
  console.log("Display the contents of the proc/cpu file");
  fs.readFile('../../proc/cpuinfo', function(err, data)
  {
    if (err) throw err;
    console.log(data);
    res.render('cpu', { title: 'CPU', message: data });
  })
})

// read the cpu information in a nicer format
app.get('/cpu-pretty', function(req, res) {
  console.log("in the pretty function");
  var myInfo;
  fs.readFile('../../proc/cpuinfo', 'utf8', function(err, data)
  {
    if (err) throw err;
    myInfo = data.split("\n");
    console.log(data);
    console.log(myInfo);
    res.render('cpu-pretty', { title: 'PRETTY', message: myInfo });
  })
})

// a basic POST request
app.post('/', function(req, res) {
  console.log("Post request at the / root");
  res.send('This is a post');
})

// a delete request
app.delete('/del_user', function(req, res) {
  console.log("Delete request from del_user");
  res.send('This is a delete');
})

// the server is listening
app.listen(PORT, function() {
  console.log('server is running on port', PORT);
})

// try another port
/*app.listen(8081, function() {
  console.log('now server is running on port 8081');
})*/
