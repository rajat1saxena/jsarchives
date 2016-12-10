// In this example, we wil create 'private' members for a object
// , just like Java's 'private' modifier's functionality

var person = function () {
	// private properties
	var name, age, address;

	// Return a new object literal with methods
	return {
		// setters
		set_name: function (n) { name = n; },
		set_age: function (n) { age = n; },
		set_address: function (n) { address = n; },

		// we can similarly write getters, if we want to.

		get_details: function () { return name + ":" + age + ":" + address }
	};
}(); // we immediately invoke the funcition we just made.

var rajat = person;
rajat.set_name ('rajat');
rajat.set_age ('29');
rajat.set_address ('Earth');
console.log (rajat.get_details ());
