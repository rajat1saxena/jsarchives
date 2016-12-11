// Testing nested functions

offset = 7;

var add = function (a, b) {
	var offset = 5;
	var sum = function () {
		// offset is coming from global scope, here
		return this.offset + a + b;
	}
	return sum();
}

console.log(add(1,2));

//=======================

var person = {
	name: 'Rajt',
	age: 29,
	address: 'Earth',
	details: function () {
		return this.address + ":" + this.name + ":" + this.age;
	}
}

console.log(person.details());

// closure equivalent of above function
var person_closure = function () {
	var name = 'Rajt';
	var age = 29;
	var address = 'Earth';
	return {
			details: function () {
				return address + ":" + name + ":" + age;
			}
	}
}();
console.log(person_closure.details());
// will produce 'undefined'
console.log(person_closure.name);

// SO: http://stackoverflow.com/questions/12475987/access-outer-function-variables-from-inner-function 
function A() {
	var x = 10;
	function B() {
		x = 20;
	}
	B();
	console.log(x);
}
A();
