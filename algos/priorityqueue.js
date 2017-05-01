// Max. Priority Queue Implementation
// As seen in CLRS
const heap = require('./heap')();

const MaxPQ = function (arr) {
	this.heap = heap.build_max_heap(arr);
};

MaxPQ.prototype.heap_maximum = function () {
	return this.heap[0];
};

module.exports = MaxPQ;

const unsorted = [23,45,34,66,19,106,99];
const maxpri = new MaxPQ(unsorted);
console.log(maxpri.heap_maximum());
	
