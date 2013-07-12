var express = require('express');

var app = express.createServer(express.logger());

var Rb = function(){
var buf = new Buffer(256);
var fs = require('fs');
buf = fs.readFileSync("index.html");
return buf.toString();

}

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
 response.send(Rb());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
