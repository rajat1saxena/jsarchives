// Custom sorting, as seen in The Good Parts; Page 81
var sorter = function (name) {
	return function (a, b) {
		if (typeof a === 'object' && 
			typeof b === 'object' &&
			a &&
			b) {
			var o = a[name];
			var p = b[name];
			if (o === p) { return 0; }
			if (typeof o === typeof p) { return o < p ? -1:1; }
			return typeof o < typeof p ? -1:1	
		}
		else {
			throw {
				name: 'Error',
				message: 'A property cannot be falsy'
			};
		}
	};
};

var collection = [
	{name: 'Rajat', age: 29},
	{name: 'Sahil', age: 25},
	{name: 'Ravi', age: 28}
];
console.log(collection.sort(sorter('name')));
