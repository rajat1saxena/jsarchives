// Radix sort
// This solution is an enhanced version of the sort, based on CLRS problem 8.3-4.
var baserconv = require('./utils/baseconvert');

var radix = function () {
  var that = {};

	var changeBase = function (arr, base, maxdigits) {
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			// using indexes to ensure that relative arrangements of 
			// items do not change (The Good Parts)
			var tempresult = baserconv.convert(arr[i], base);
			// append zeros, to match maxdigits
			for (var j = 0; j < maxdigits - tempresult.length; j++) {
				tempresult.unshift(0);
			}
			result[i] = tempresult;
		}
		return result;
	};
	
	var countingSort = function (arr, base, offset) {
		var b = [];
		var c = [];
		var i,j;
		for (i = 0; i < base; i++) {
			c[i] = 0;
		}
		for (i = 0; i < arr.length; i++) {
			c[arr[i][offset]] += 1;
		}
		for (i = 0; i < base -1; i++) {
			c[i+1] = c[i+1] + c[i];	
		}
		for (i = arr.length-1; i >= 0; i--) {
			b[c[arr[i][offset]]-1] = arr[i];	
			c[arr[i][offset]] -= 1;
		}

		return b;
	}
	
	var sort = function (arr, base, range) {
		var maxdigit = Math.floor(Math.log(range)/Math.log(base)) + 1;
		console.log(maxdigit);

		if (base && typeof base !== 'undefined') {
			arr = changeBase (arr, base, maxdigit);
		} else {
			throw {
				name: "TypeError",
				message: "Radix is expected"
			};
		}

// 	 for (var i = 0; i < maxdigit; i++) {
// 		arr = countingSort (arr, base, i);	
// 	 }

	 return arr;
	}



	that.sort = function (arr, base, range) {
		return sort(arr, base, range);
	}

	return that;

}

var rs = radix();
console.log(rs.sort([0, 24, 13, 4, 19], 5, 25));
