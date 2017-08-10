// Min Heap Implimentation
// Based on heap.js, located in this folder
'use strict';

const heap = function () {
	var that = {};

    // function to swap array values
	const swap = function (a, u, v) {
		const temp = a[u];
		a[u] = a[v];
		a[v]= temp;
		return a;
	};	

	const min_heapify = function (a, i) {
		const left = 2*i;
		const right = 2*i+1;
		let smallest = i;
		// heapsize-1 for the fact that index starts from 0
		if (left <= a.heapsize-1 && a[left] < a[smallest])
			smallest = left;
		if (right <= a.heapsize-1 && a[right] < a[smallest])
			smallest = right;
		if (smallest !== i) {
			a = swap(a, i, smallest);
			// tail call optimization
			return min_heapify(a, smallest);
		}
		return a;
	};

	const build_min_heap = function (a) {
		a.heapsize = a.length; 
		for(let i = Math.floor((a.length-1)/2); i>=0; i--) {
			a = min_heapify(a, i);
		}
		return a;
	};

//	that.min_heapify = min_heapify;
	that.build_min_heap = build_min_heap;	
	return that;
};

module.exports = heap;

