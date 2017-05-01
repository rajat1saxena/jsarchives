// Heap Sort Implementation
// As seen in CLRS
'use strict';

const heapsort = function(a) {
	const heap = require('./heap')();

	const swap = function (a, u, v) {
		const temp = a[u];
		a[u] = a[v];
		a[v]= temp;
		return a;
	};	

	a = heap.build_max_heap(a);
	console.log(a);

	for (let i = a.length-1; i>=0; i--) {
		a = swap(a, 0, i);
		a.heapsize = a.heapsize - 1;
		a = heap.max_heapify(a, 0);
		console.log(a[i]);
	};
};

heapsort([23,45,34,66,19,106,99]);
