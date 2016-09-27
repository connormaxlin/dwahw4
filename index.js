var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  res.status(404);
  res.send('404 - page not found');
});


app.listen(3001);

console.log('listening on port 3001');