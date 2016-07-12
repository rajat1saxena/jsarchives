// Get fs module from Node.js's core library
var fs = require('fs');

// Get the file, the file name is supplied from console input
fs.readFile(process.argv[2], 'utf8' , function(err, data) {
	// Process the string data returned from file
	console.log( data.split('\n').length -1 );
});
