var mergesort = function (arr) {
	var that = {};
	var merge = function (p,q,r) {
	var left = [];
	var right = [];
	var i,j;
        for (i = p; i <= q; i++) {
            left.push(arr[i]);
        }
        for (j = q + 1; j <= r; j++) {
            right.push(arr[j]);
        }
		var it = r - p  + 1; i = 0; j =0;
        for (it = p; it <= r; it++) {
		if (left.length === 0) { arr[it] = right.shift(); }
   		else if (right.length === 0) { arr[it] = left.shift(); }
		else {
			if (left[0] < right[0]) {
                		arr[it] = left.shift();
            		} else {
				arr[it] = right.shift();
            		}
		}
        }
    };
    var sort = function (p, r) {
		if (p < r) {
			var q = Math.floor((r + p)/2);
			sort (p, q);
			sort (q+1, r);
			merge (p, q, r);
        }
    };
	that.sort = function () {
		sort (0, arr.length - 1);
		return arr;
    };
	return that;
};

var candidate = mergesort ([3,2,1,4,56,0,-1,3,100024, -24, 78, 3250]);
console.log(candidate.sort());
