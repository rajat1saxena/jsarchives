// Counting sort, based on CLRS. 
// Complexity: O(n)
var counting = function (arr) {
	var that = {};

	var sort = function () {
		var c = {};
		var i;
		var b = [];
		for (i = 0; i<10; i++) {
			c[i] = 0;
		}
		for (i = 0; i < arr.length; i++) {
			c[arr[i]] += 1;
		}
		for (i = 0; i < 9; i++) {
			c[i+1] = c[i] + c[i+1];	
		}
		for (i = arr.length - 1 ; i >= 0; i--) {
			b[c[arr[i]] - 1] = arr[i];
			c[arr[i]] -= 1;
		}
		
		return b;
	}

	that.sort = function () {
		return sort ();
	}

	return that;
}

var counter= counting ([7,8,8,7,8,8,8,9,0]);
console.log(counter.sort());
