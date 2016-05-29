// Functions related stuff
// JavaScript supports four patterns of invocation
// read it more in 'The Good Parts'

// To use 'Function invocation pattern'
// you would require an external function
// like the following:
//
// function adder(a, b) {
//	return a + b;
// };

var app = {};

app.times_called = 0;
app.value = 1;

// Method invocation pattern
app.add = function(a, b) {
	// In this method 'this' refers to the object
	// this function is a part of.
	console.log(this);
	
	// increment the counter
	this.times_called++;

	return a + b;
};

// Function invocation pattern
app.double = function() {
	// To refer to the enclosing object
	var that = this;

	var helper = function() {
		that.value = adder(that.value, that.value);	
	};

	helper();
};

// Call the add function
app.add(6, 5);
// Call the double function
app.double();
console.log(app.value);

// Export app
module.exports = app;
