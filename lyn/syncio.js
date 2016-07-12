// Get fs module from Node.js's core library
var fs = require('fs');

// Get the file, the file name is supplied from console input
var fileContentBuffer = fs.readFileSync(process.argv[2]);

// Convert the Buffer object into string
var fileContentString = fileContentBuffer.toString();

// Split the file, using '\n' as delimiter
var splitted = fileContentString.split('\n');

// Taking into account that the very last line of the file won't have
// any newline character
console.log(splitted.length - 1);
