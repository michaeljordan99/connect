var connect = require('connect');

//import middlewares
var helloWorld = require('./hello_world');

var app = connect.createServer(helloWorld);
app.listen(8080);

console.log("Web Server is up on Port 8080");