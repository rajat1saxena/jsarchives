debugger;
var heapsort = function (arr) {
	var swap = function (source, target) {
		var temp = arr[source];
		arr[source] = arr[target];
		arr[target] = temp;
	}
	var max_heapify = function (i) {
		var left = 2*i;
		var right = 2*i + 1;
		var largest;
	
		if (arr(left) > arr[i] 
				&& left < arr.heapsize) {
			largest = left;
		} else {
			largest = i;
		}
		if (arr(right) > arr[i]
				&& right < arr.heapsize) {
			largest = right;
		}
		if (largest !== i) {
			swap (arr[i], arr[largest]);
			max_heapify (largest);
		}
	}
	var build_max_heap = function () {
		arr.heapsize = arr.length;
		for (i = Math.floor(arr.length/2); i >= 0; i--) {
			max_heapify (i);
		}
	}
	var heap_sortify = function () {
		var result = [];
		for (i = arr.heapsize - 1; i >= 0; i--) {
			swap (0, arr.heapsize -1);
			result [i] = arr[arr.heapsize-1];
			delete arr[arr.heapsize-1];
			max_heapify (i);
		}
		return result;
	}

	return {
		sort: function () {
			return heap_sortify ();
		}
	}
};

var heapsorted = heapsort ([3, 2, 4, 1]);
console.log(heapsorted.sort());

