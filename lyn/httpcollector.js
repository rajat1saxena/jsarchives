// Program to collect data from a URL and print
const bl = require('bl'); // BufferList
const http = require('http');

http.get(process.argv[2], function (response) {
	response.pipe(
		bl(
			function (err, data) {
				// fail fast
				if (err)
					return console.log(err);

				// 'data' is a complete buffer having full data from URL
				// 1. Print total number of characters in 'data'
				console.log(data.toString().length);

				// 2. Print complete data buffer as string 
				console.log(data.toString());
			}
		)
	);
});

