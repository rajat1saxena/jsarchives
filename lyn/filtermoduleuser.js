// Load filtermodule
var filtermodule = require('./filtermodule');

// Callback function for entertaining file listing request
function processListings(err, listOfFiles) {
	// Process error, if any
	if (err) { console.log(err); }

	// No errors encountered! Process the input
	listOfFiles.forEach(function(file) {
		console.log(file);
	});
}

// call the function
filtermodule(process.argv[2], process.argv[3], processListings);
