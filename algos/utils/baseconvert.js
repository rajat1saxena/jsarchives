// Converts decimal numbers to numbers in provided base
exports.convert = function (num, base) {
	var digits = [];
	var rem;
	while (num >= base) {
		rem = num % base;
		digits.push(rem);
		num = parseInt(num/base, 10);
	}
	digits.push(num);
	return digits.reverse();
};

// Converts back the array returned by above function into a number, provided 
// the same base is provided as input.
exports.convertback = function (arr, base) {
    var result = 0;
    var i;
    var j = 0;
    for (i = arr.length - 1; i >= 0; i--) {
        result = result + arr[i] * Math.pow(base, j);
        j += 1;
    };
    return result;
};

