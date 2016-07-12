// Prints contents of a directory based on extension
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = process.argv[3];

// Read directory, asynchronously [More like Java way]
fs.readdir(dir, function directoryListing(err, listoffiles) {
	for(var i in listoffiles) {
		var fileExtension = listoffiles[i].split('.');
		// Check if the file name contains an extension, if yes than
		// is it same as the desired extension
		if (fileExtension.length > 1 && 
			fileExtension[fileExtension.length -1] === extension) {
			console.log(listoffiles[i]);
		}
	}
}); 

// Alternative approach, [JS way]
fs.readdir(dir, function directoryListing(err, listoffiles) {
	listoffiles.forEach(function (file) {
		if (path.extname(file) === extension) {
			console.log(file);
		}
	});	
});
