// This example ventures into 'this' keyword
//'use strict';
console.log(this);

// Define 'firstName' in global window object 
var firstName = 'Avinash';

var person = {
	firstName: 'Rajat',
	lastName: 'Saxena',
	// Since the "this" keyword is used inside the fullName method below, and the fullName method is defined on the person object
    // "this" will have the value of the person object because the person object will invoke fullName() 
	fullName: function () {
		// Here the firstName will be taken from global context
		// that's why 'this' keyword is necessary to prevent such
		// scenarios.
		return firstName + this.lastName;
	}
}
console.log(person.fullName());
var anotherPerson = {
	firstName: 'Shweta',
	lastName: 'Kumar'
}
console.log(person.fullName.apply(anotherPerson));

// Following variables are defines in global window object
var a = 'Rajat'; 
var b = 'Saxena';
function showAB() {
	//console.log(this);
	// Following statement outputs 'undefined undefined' in Node.js
	// and 'Rajat Saxena' in Chrome. 
	console.log(this.a + " " + this.b);
}
showAB();
