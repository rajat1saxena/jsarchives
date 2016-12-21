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
				// A: following step enables looping in 'while'
				j = j - 1;
			}
			// to counter side effect of A
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
