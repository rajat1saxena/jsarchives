// HTTP file server

'use strict'
const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];  // file to be served by this server

let server = http.createServer(
	function (req, res) {
		// handle file serve request
		// create readable stream for the specified 'file'
		let fstream = fs.createReadStream(file);

		// pipe the file stream (ReadStream) to http write stream
		fstream.pipe(res);
	}
);

if (typeof port === 'undefined') 
	console.log('Port not specified');
else if (typeof file === 'undefined')
	console.log('File not specified');
else
	server.listen(port);
