// This program demonstrates that async commands don't block the rest of
// the file from executing, like in other sync based executions
var fs = require('fs');
var myNumber = undefined;

function addOneMore() {
	fs.readFile('number.txt', function doneReading(err, fileContent) {
		myNumber = parseInt(fileContent);
		console.log(++myNumber);
	});
}

console.log('Calling addOneMore');
addOneMore();
console.log('Called addOneMore');
