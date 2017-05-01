// Heap Implimentation
// As seen in CLRS
'use strict';

const heap = function () {
	var that = {};

	const swap = function (a, u, v) {
		const temp = a[u];
		a[u] = a[v];
		a[v]= temp;
		return a;
	};	

	const max_heapify = function (a, i) {
		const left = 2*i;
		const right = 2*i+1;
		let largest = i;
		// heapsize-1 for the fact that index starts from 0
		if (left <= a.heapsize-1 && a[left] > a[largest])
			largest = left;
		if (right <= a.heapsize-1 && a[right] > a[largest])
			largest = right;
		if (largest !== i) {
			a = swap(a, i, largest);
			// tail call optimization
			return max_heapify(a, largest);
		}
		return a;
	};

	const build_max_heap = function (a) {
		a.heapsize = a.length; 
		for(let i = Math.floor((a.length-1)/2); i>=0; i--) {
			a = max_heapify(a, i);
		}
		return a;
	};

	that.max_heapify = max_heapify;
	that.build_max_heap = build_max_heap;	
	return that;
};

module.exports = heap;

