// Calculates the sum of an array, asynchronously, using Promises.
// HYPOTHETICAL PROBLEM
const a = [1, 2, 3];
			
const adderPromise = function (a, b) {
	return new Promise (function (resolve, reject) {
		isNaN(a) || isNaN(b) ? reject('Invalid number(s)' + a + ',' + b) :  resolve(a+b);
	});
};

const getSum = function (a, b) {
	return adderPromise(a, b).then(function (sum){
		return sum;
	});
};

// Driver program
((a) => {
	let sum = 0;
	(a.reduce(function (acc, val) {
		return acc.then(function () {
			return getSum(sum, val); //returns a promise
		}).then(function (promsum) {
			sum = Number(promsum);
			return promsum; // returning the promise, we got from getSum()
		})
		.catch(function (error) {
			throw error;
		});
	}, Promise.resolve())
	).then(function(result) { // handling 'promsum' promise, we got, after the completion of 'reduce()'
		console.log(result);
	});
})(a);