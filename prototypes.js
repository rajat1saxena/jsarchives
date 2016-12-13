// Fun with prototypes
var per = function () {}
per.prototype = {
	// Error: same storage, for all objects
	// to give each object, it's own food storage, move the variable
	// 'food' in 'per' declaration.
	food: [],

	store_food: function (food) {
		this.food.push(food);
	},
	get_foods: function () {
		for (i in this.food) {
			console.log(this.food[i]);
		}
	}
}

var p1 = new per();
var p2 = new per();

p1.store_food('rajma');
p1.store_food('chawal');
p2.get_foods();
