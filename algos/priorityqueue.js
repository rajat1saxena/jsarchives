// Max. Priority Queue Implementation
// As seen in CLRS
const heap = require('./heap')();

const MaxPQ = function (arr) {
	this.arr = heap.build_max_heap(arr);
};

MaxPQ.prototype.maximum = function () {
	return this.arr[0];
};

MaxPQ.prototype.extract_max = function() {
	let arr = this.arr;
	// swap heap[0] with heap[heapsize-1]
	this.swap(0, arr.heapsize-1);
	//const temp = arr[0];
	//arr[0] = arr[arr.heapsize-1];
	//arr[arr.heapsize-1] = temp;
	
	// get the maximum element
	const result = arr[arr.heapsize-1];
	arr.heapsize = arr.heapsize - 1;

	// pop the last element (this step is not in CLRS), just some JS stuff
	arr.pop();

	// re-establish the heap property
	arr = heap.max_heapify(arr, 0);

	return result;
};

MaxPQ.prototype.parent = function (i) {
	return Math.floor(i/2);
};

MaxPQ.prototype.swap = function (u, v) {
	const temp = this.arr[u];
	this.arr[u] = this.arr[v];
	this.arr[v] = temp;
};

// Increase the value to element at ith position to k
MaxPQ.prototype.increase_key = function(i, k) {
	i = i - 1; // index starts with 0 in JS
	let arr = this.arr;
	if (arr[i] > k) {
		throw new Error("Key is less than current value");
	}
	arr[i] = k;
	// check if parent is less than increased node
	while (i > 0 && arr[this.parent(i)] < arr[i]) {
		this.swap(this.parent(i), i);
		i = this.parent(i);
	}
};

MaxPQ.prototype.max_heap_insert = function (val) {
	this.arr.push(-Infinity);
	this.arr.heapsize++;
	this.increase_key(this.arr.length, val);	
};

module.exports = MaxPQ;

// Tests
const unsorted = [23,45,34,66,19,106,99];
const maxpri = new MaxPQ(unsorted);
console.log(maxpri.maximum());
console.log(maxpri.extract_max());
console.log(maxpri.arr);
maxpri.increase_key(3, 100);
console.log(maxpri.arr);
maxpri.max_heap_insert(78);
maxpri.max_heap_insert(170);
console.log(maxpri.arr);
