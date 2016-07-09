/*
* This program demonstrates var declaration and hoisting.
*
* Read more: 
* https://leanpub.com/understandinges6/read#leanpub-auto-var-declarations-and-hoisting
*/
function myVar() {
	if (!true) {
		// Although this variable is defined here inside 'if', but it
		// will be hoisted to the function level.
		var x = 25;
	} else {
		// x is available here with a value 'undefined'
		console.log(x);
	}
}

// Call the function
myVar();
