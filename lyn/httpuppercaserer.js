// HTTP Uppercaserer from Learnyounode
'use strict'

const map = require('through2-map');
const http = require('http');

const server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		let data = "";

		req.on('data', function (chunk) {
			data += chunk;
		});

		req.on('end', function() { 
			data.pipe(map(function (chunk) {
				return chunk.toString().split('').reverse().join('');
			})).pipe(res);
		});
	} else {
		res.end('Unsupported method');
	}	
});

server.listen(process.argv[2]);
