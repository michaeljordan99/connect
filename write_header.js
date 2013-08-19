function writeHeader(name, value){
	return function(req, res, next){
		res.setHeader(name, value);
		debugger;
		next();
	};
}

module.exports = writeHeader;