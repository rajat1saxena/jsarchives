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
	// returns maximum value that can be achieved
	var solve = function (s, w, n, r) {
		var selection = [] // array of items to pick to maximize profit
		for (var i = 0; i <= w; i++) {
			selection[i] = [];
		}
		for (var i = 1; i <= w; i++) {
			for(var j = 1; j <= n; j++) {
				if (s[j-1][0] > i) { r[i][j] = r[i][j-1]; }
				else if (s[j-1][0] <= i) {
					var jitem = s[j-1][1] + r[i-s[j-1][0]][j-1];
					var jminusonevalue = r[i][j-1];
					r[i][j] = max(jitem, jminusonevalue);	
					if (jitem > jminusonevalue) {
						// this item should be selected to maximize profit
						selection[i][j] = 1;
					}
				}
			}
		}
		// backtrack to get the optimal subset
		var k = w;
		var result = [];
		for (var i = n; i >= 1; i--) {
		    if (selection[k][i] === 1) {
		        result.push(s[i-1]);
		        k = k - s[i-1][0];
		    }
		}
		return {
			maxvalue: r[w][n],
			selection: result
		};
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
