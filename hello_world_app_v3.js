var connect = require('connect');

// Import Middleware
var errorCreator = require('./error_creator');
var writeHeader = require('./write_header');
var replyText = require('./reply_text');
var errorHandler = require('./error_handler');

var app = connect.createServer(
	errorCreator(),
	writeHeader('X-Powered-By', 'Node'),
	replyText('Hello World #3!\n'),
	errorHandler()
	);

app.listen(8080);