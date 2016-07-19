'use strict'
// HTTP file server
const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];  // file to be served by this server

// Callback function to process http requests
const httpFileServe = function (req, res) {
	// handle file serve request
	// create readable stream for the specified 'file'
	let stream = fs.createReadStream(file);
	res.end();
}

const server = http.createServer(httpFileServe);

if (typeof port === 'undefined') 
	console.log('Port not specified');
else if (typeof file === 'undefined')
	console.log('File not specified');
else
	server.listen(port);
