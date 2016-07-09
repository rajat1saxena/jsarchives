/*
* This program demonstrates the use of new 'let' and 'const'.
*/

// to use latest ES6 features in node.js
"use strict";

function myVar() {
	var x = 25;

	
	// block scope - new in ES6
	{
		// Temporal dead zone
		// ------------------
		// variable declaration with either let or const cannot be accessed
		// until after the declaration
		// console.log(typeof x); // throws ReferenceError

		let x = 23; // no hoisting for variables defined with let
		
		// the block level 'x' shadows the one defined using var, inside
		// this block scope.
		console.log(x); // prints 23, not 25

		// let variables can be reassigned new values
		x = 78;
	    console.log("let variable x, after re-assignment: " + x);	
	}

	{
		// No Temporal dead zone here. [Need to learn more]
		console.log(typeof x);
	}

	{
		// const x; // Syntax error, missing initialization
		const x = 45;
		console.log(x);	

		// Re-declaration for let and const is not allowed
		// const x = 67; // throws error

		// const variable cannot be reassigned new values
		// x = 67; // throws error
		console.log(x);

		// const declaration prevents modification to the binding and
		// not of the value itself
		const person = { name: "Rajat" };
		person.name = "Neeraj"; // works
		console.log("Person's name: " + person.name);
		// Attempt to change the binding, will fail
		// person = { name: "Ravina" } // throws error
	}

	// Block bindings in loops
	// -----------------------
	for (var i=0; i<10; i++) {
	}
	// variable i is accessible here as well, due to hoisting
	console.log(i); // value is 10

	// To prevent such scenarios, use 'let' inplace of 'var'
	for (let j=0; j<10; j++) {} //Un-comment following line to see behavior
	// console.log(j); // throws ReferenceError

	// IIFEs
	var funcs = [];
	for (var i=0; i<10; i++) { 
		// every function will be referencing the same variable i,
		// hence the same value(10) will be printed 10 times.
		funcs.push(function(i) { console.log(i); }) 
	}
	console.log(funcs);
	// Example two
	var funcs2 = [], object = {a: "R", b: "S", c: "E"};
	for (var key in object) { 			// use let for correct behavior
		funcs2.push(function() {
			console.log(key);
		});
	}
	funcs2.forEach(function(func) { func(); });
}

// Call the function
myVar();
