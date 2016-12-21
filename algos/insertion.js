// Insertion sort: A in-place sorting algoritm with O(n^2) running time
var insertion = function (arr) {
	var that  = {};
	var sort = function () {
		var i, j, key;
		for (i = 1; i < arr.length; i++) {
			key = arr[i];
			j = i - 1;
			while (j >= 0 && arr[j] > key) {
				arr[j+1] = arr [j];
				j = j - 1;
			}
			// re-adjusting the bound (extra step from CLRS algorithm)
			j = j + 1;
			arr[j] = key;
		}	
	}
	that.sort = function () { 
		sort(); 
		return arr;
	}
	
	return that;
}

var ins = insertion([3,2,4,-1,90,-234,1004]);
console.log(ins.sort());
