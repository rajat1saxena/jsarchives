// Max. sub array bruteforce algorithm
var maxbrute = function (arr) {
	var that = {};

	var find = function () {
		var i,j;
		var sum;
		var highest_sum = -Infinity;
		var max_low = -1;
		var max_high = -1;
		for (i = 0; i < arr.length; i++) {
			sum = 0;
			for (j=i; j < arr.length; j++) {
				sum = sum  + arr[j];
				if (sum > highest_sum) {
					max_high = j;
					max_low = i;
					highest_sum = sum;
				}
			}
		}
		return {
			low: max_low,
			high: max_high,
			sum: highest_sum
		};
	}

	that.find = function () {
		return find();
	}

	return that;
}

var mb = maxbrute ([13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]);
console.log(mb.find());
