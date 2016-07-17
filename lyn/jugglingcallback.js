'use strict';

const bl = require('bl');
const http = require('http');

// array to contain three strings returned by 3 URLs
const container = []; 

// a counter to trigger action only after if every request
// has completed. Read about this pattern here:
// http://stackoverflow.com/a/5173147/942589
let counter = 3;

// Simple wrapper for http 'get' method
function getData(url, index) {
	http.get(url, function(response) {
		// use bl library to get complete response data
		response.pipe(bl(function(err, data) {
			if (err)
				return console.log(err);
			container[index] = data.toString();
			
			// counter has to be in a function which is the cause of
			// latency
			counter--;
			if (counter <= 0) 
				printEntireDataFromThreeUrls();
		}));
	});
}

// Prints all the data in the container array
function printEntireDataFromThreeUrls() {
	for(let i in container) {
		console.log(container[i]);	
	}
}

// DRIVER PROGRAM
// Iterate 3 times to get all the data from URLs and print in given
// sequence, as stated in the question.
for (let i=0; i<3; i++) {
	getData(process.argv[ i+2 ], i);
}
