// Program for http client problem in learnyounode.
// This program is a basic http client which fetches data from a url.
var http = require('http');

// Bind http events
// response is Streams object
http.get(process.argv[2], function (response) {
	// Set encoding of response to utf8 for converting Node Buffers to
	// string, in-case of data events
	response.setEncoding('utf8');

	response.on('err', function(err) {
		console.log(err);
	});
	response.on('data', function (data) {
		console.log(data);
	});
	response.on('end', function () {
		//console.log('Request complete');
	});
});

