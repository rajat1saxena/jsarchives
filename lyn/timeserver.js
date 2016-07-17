// Time server program from learnyounode

'use strict';

const net = require('net');
const defaultPort = 3000;

// create a server which outputs current date
const server = net.createServer(function (socket) {
	const date = new Date();
	// we want date in format '2013-04-03 17:24'
	const dateFormattedOutput = date.getFullYear()
								+ '-'
								// slice(-2) gives two characters from
								// the end
								// ('0' + '9').slice(-2) == '09'
								// Additionally, getMonth() return
								// zero-based value, starting from 0
								// hence the +1
								+ ('0' 
									+ (parseInt(date.getMonth()) + 1))
									.slice(-2)
								+ '-' 
								+ ('0' + date.getDate()).slice(-2)
								+ ' ' + 
								+ ('0' + date.getHours()).slice(-2)
								+ ':'
								+ ('0' + date.getMinutes()).slice(-2)
	
	// return the result and close the socket
 	socket.end(dateFormattedOutput + '\n');
});

// start listening, if no port is provided using command line use default
server.listen(typeof process.argv[2] != 'undefined' ? 
	process.argv[2] : defaultPort
);
