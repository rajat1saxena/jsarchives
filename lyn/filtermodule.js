var fs = require('fs');
var path = require('path');

// It will override everything that is there in module.exports, so if you
// use it using require statement, you can use that variable as the functio-
// n name.
module.exports = function (dirpath, extension, callback) {
	fs.readdir(dirpath, function directoryListing(err, files) {
		// If any error, then call the callback with err set  
		if (err) { return callback(err, null); }	

		// No errors! process the array
		var result = [];
		files.forEach(function (file) {
			if (path.extname(file) === '.'+extension) {
				// Add the file to result
				result.push(file);
			}
		});

		// Return the result to callback
		callback(null, result);
	});	
}
