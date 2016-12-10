// In this example, we will look at cascade as described in The Good Parts
// page 42

var person = function () {
	// private properties
	var name, age, address;

	// Return a new object literal with methods
	return {
		// setters
		set_name: function (n) { name = n; return this; },
		set_age: function (n) { age = n; return this; },
		set_address: function (n) { address = n; return this; },

		// we can similarly write getters, if we want to.

		get_details: function () { return name + ":" + age + ":" + address }
	};
}(); // we immediately invoke the funcition we just made.

var rajat = person;
rajat.set_name ('rajat')
		.set_age ('29')
		.set_address ('Earth');
console.log (rajat.get_details ());
