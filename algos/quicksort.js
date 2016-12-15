var quicksort = function (arr) {
	var that = {};

	var swap = function (arr, source, target) {
		var temp = arr[source];
		arr[source] = arr[target];
		arr[target] = temp;
	}
	
	var sort = function (arr, p, r) {
		var q;
		if (p < r) {
			q = partition (arr, p, r);
			sort (arr, p, q-1);
			sort (arr, q+1, r);
		}
	}

	var partition = function (arr, p, r) {
		var x = arr[r];
		var i = p - 1;
		for (var j = p; j < r; j++) {
			if (arr[j] < x) {
				i = i + 1;
				swap (arr, i, j);
			}
		}
		swap (arr, i + 1, r);
		return i + 1;
	}

	that.sort = function () {
		sort(arr, 0, arr.length - 1);
		return arr;
	}

	return that;
}

var quickr = quicksort ([2, 3, 5, 4, 1, -65, 1004, 20345, -98]);
console.log(quickr.sort());
