// Simple object creation and stuff like
// prototypes and all

// Global abatement:
// Minimize the use of global variables by 
// creating a single global variable for our
// application. [Adopted from 'The Good Parts']
var app = {};

app.person = {
	name: 'Human',
	age: 0,
	location: {
		latitude: 0.0,
		longitude: 0.0
	}
};

if (Object.create !== 'function') {
		Object.create = function(o) {
			var F = function() {};
			F.prototype = o;
			return new F();
		};
}

// Create a new person
app.new_person = Object.create(app.person);

// Set name of app.new_person
app.new_person.name = 'Rajat';
// Augment new properties to app.new_person
app.new_person.lastname = 'Saxena';

console.log(app.new_person);
console.log(app.new_person.__proto__);

// Check if lastname is app.new_person's property
// or something found in its prototype chain.
console.log(app.new_person.hasOwnProperty('lastname'));

// Iterate over all properties on app.new_person
console.log('\nIterating over properties...');
for(app.prop in app.new_person) {
	// Notice how we addressed the app.new_person's
	// prop using square brackets, it's the correct
	// way.
	console.log(app.prop, typeof app.new_person[app.prop]);
}
// Iterate over app.new_person's properties in desired 
// sequence.
console.log('\nInterating in desired sequence...');

app.seq = [
	'name',
	'location',
	'age'
];
for (app.i=0; app.i < app.seq.length; app.i++) {
	console.log(app.new_person[app.seq[app.i]]);
}

// Delete a property; It won't touch any of the objects
// in the prototype linkage
delete app.new_person.lastname;
console.log('After deleting lastname: ');
console.log(app.new_person);
