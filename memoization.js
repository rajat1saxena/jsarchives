// Fibonacci Numbers using Memoization technique

var fibonacci = function (n) {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib (n-1) + fib (n-2);
			memo[n] = result;
		}
		return result;
  	}
	return fib;
}();

console.log(fibonacci(11));

// Generalizing the approach
var memoizer = function (memo, fundamental) {
	return shell = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fundamental (shell, n);
			memo[n] = result;
		}
		return result;
	}
};

var fibonacci = memoizer ([0, 1], function (recursivefunc, n) {
	return recursivefunc (n-1) + recursivefunc (n-2);
});

console.log(fibonacci(11));
