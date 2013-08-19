var connect = require('connect');

// Import Middleware
var replyText = require('./reply_text');

var app = connect.createServer(replyText("Hello World Version 2!\n"));

app.listen(8080);

console.log("Web Server is listening on Port 8080");