// Initialize sum variable
var sum = 0;

// We will start from index 2 as the process.argv is an array like:
// ['node', '/path/to/program.js', 1, 2, 3]
for (var i=2; i<process.argv.length; i++) {
	sum += Number(process.argv[i]);
}

console.log(sum);
