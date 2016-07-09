/*
* This program demonstrates the use of new 'let' and 'const'.
*/

// to use latest ES6 features in node.js
"use strict";

function myVar() {
	var x = 25;
	
	// block scope - new in ES6
	{
		let x = 23;
		
		// the block level 'x' shadows the one defined using var, inside
		// this block scope.
		console.log(x); // prints 23, not 25
	}
}

// Call the function
myVar();
