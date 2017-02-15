// Classical Knapsack 0-1 problem
// as seen in CLRS
'use strict';
var knapsack = function () {
	var that = {};

	// creates a two dimensional array for memoization
	var setup = function (w, n) {
		// create an empty two dimensional array [0...n, 0...w]
		var r = [];
		for(var i = 0; i <= w; i++) {
			r[i] = [0];	
		}
		for(var i = 0; i <= n; i++) {
			r[0][i] = 0;	
		}
		return r;
	}

	var max = function (a, b) {
		return a > b ? a : b
	};
	
	// s: array of items' weight
	// w: maximum weight
	// n: total number of items
	var solve = function (s, w, n, r) {
		for (var i = 1; i <= w; i++) {
			for(var j = 1; j <= n; j++) {
				if (s[j-1][0] > i) { r[i][j] = r[i][j-1]; }
				else if (s[j-1][0] <= i) {
					console.log('entered: ' + i + j);
					r[i][j] = max(r[i-s[j-1][0]][j-1], r[i][j-1]);	
				}
			}
		}
		return r;
	}

	that.solve = function (s, w) {
		return solve(s, w, s.length, setup(w, s.length));
	}

	return that;
}

// array of items: [weight,value]
var items= [[10,60],[20,100],[30,120]];
var instance = knapsack();
console.log(instance.solve(items, 50));
