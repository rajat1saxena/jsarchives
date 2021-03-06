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
	// Exception handling
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'Arguments should be numeric'
		};
	}

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
// Call the add function, with non-numeric arguments
// app.add('Haha', 6); // Note the this step will halt further execution
// Try-catch
app.tried = function() {
	try {
		app.add('Haha', 6);
	} catch (e) {
		console.log('\nError encountered in tried()');
		console.log(e.name + ': ' + e.message);
	}
};
app.tried();
// Call the double function ; Uncomment to use Func. Inv. pattern 
//app.double();
console.log(app.value);

// Augmenting Types
// First, augment Function.prototype with a new 'method'
Function.prototype.method = function (name, func) {
	// Defensive technique to add a method
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
};
// Now use the 'method' method
app.doubleVal = 23.67;
Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log(app.doubleVal.integer());

// Scopes
// JS does not support block level scopes, but only
// function level scopes, so all the variables should
// be defined at the start of the function body
app.scopy = function(a) {
	console.log('Executiong of scopy()');
	console.log('Init a:' + a);
	var bar = function(b) {
		a += b;
	};
	// value of a is not changed at this point
	console.log('Pre called a:' + a);
	bar(20);
	// Value of a is changed now
	console.log('Post called a:' + a);
	return a;
}
app.scopy(10);

// Closure
app.quo = function (status) {
	return {
		get_status: function () {
			return status;
		}
	};
};
var myQuo = app.quo("rajat");
console.log(myQuo.get_status());

// Module
app.serial_maker = function() {
	// private properties
	var prefix = '';
	var seq = 0;
	
	// public properties
	return {
		set_prefix: function (p) {
			prefix = String(p);
		},
		set_seq: function (s) {
			seq = s;
		},
		gensym: function() {
			var result = prefix + seq;
			seq += 1;
			return result;
		}	
	};
};
// Call serial_maker()
var seqer = app.serial_maker();
seqer.set_prefix('R');
seqer.set_seq(2000);
// Following lines will generate consecutive sequence numbers
console.log(seqer.gensym());
console.log(seqer.gensym());
console.log(seqer.gensym());

// Memoization
app.fibonacci = function() {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (typeof result != 'number') {
			result = fib(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();
console.log(app.fibonacci(3));

// Export app
module.exports = app;
