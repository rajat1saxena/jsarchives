// Memoized top down rod cutting, as seen in CLRS problem# 15.1-4
var td_rod_cut = function (p, n) {
	var that = {};
	
	var setup = function (r, n, val) {
			var def = 0;
			val = val || def;
			for (var i = 0; i <= n; i++) {
				r[i] = val;
			}
	}

	var process = function (p, n) {
		var aux_result;
		var r = [];
		var s = [];
		setup (s, n, 0);
		setup (r, n, -Infinity);
		aux_result = td_rod_cut_aux(p, n, r, s);	
		console.log('Maximum value: ' + aux_result);
		while (n > 0) {
			console.log(s[n]);
			n = n - s[n];
		}
	};

	that.process = function () {
		process(p, n);
	}

	var td_rod_cut_aux = function (p, n, r, s) {
		var q = -Infinity;
		if (r[n] >= 0) {
			return r[n];
		}
		if (n === 0) {
			q = 0;
		} else {
			for (var i = 1; i <= n; i++) {
				var res = p[i-1] + td_rod_cut_aux(p, n-i, r, s);
				if (q < res) {
					q = res;
					s[n] = i;
				}	
			}
		}
		r[n] = q;
		return q;
	};

	return that;
}

var rod = td_rod_cut ([1,5,8,9,10,17,17,20], 8);
rod.process();
