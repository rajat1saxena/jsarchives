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

// 1. Method invocation pattern
app.add = function(a, b) {
	// In this method 'this' refers to the object
	// this function is a part of.
	console.log(this);
	
	// increment the counter
	this.times_called++;

	return a + b;
};

// 2. Function invocation pattern
//app.double = function() {
//	// To refer to the enclosing object
//	var that = this;
//
//	var helper = function() {
//		that.value = adder(that.value, that.value);	
//	};
//
//	helper();
//};

// 3. Constructor pattern
app.Foo = function(y) {
	this.y = y;
};
app.Foo.prototype.x = 10;
app.Foo.prototype.fakeMethod = function() {
	return this.w * 2;
};
app.Foo.prototype.calculate = function(z) {
	return this.x + this.y + z;
};
app.foo1 = new app.Foo(20);
console.log('Calculate: ' + app.foo1.calculate(10));

// 4. Apply Invocation pattern
app.fakeObject = {
	w: 2
};
// fakeObject does not inherit from app.Foo.prototype,
// but we can invoke the fakeMethod on fakeObject even
// though fakeObject does not have a fakeMethod method.
console.log('Apply invocation: ' + app.Foo.prototype.fakeMethod.apply(app.fakeObject));

// 5. Arguments
app.addAll = function() {
	var i, sum = 0;
	for(i=0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
};
console.log('addAll: ' + app.addAll(1,2,3));


// Call the add function
app.add(6, 5);
// Call the double function ; Uncomment to use Func. Inv. pattern 
//app.double();
console.log(app.value);

// Export app
module.exports = app;
