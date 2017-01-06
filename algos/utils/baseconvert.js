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
}

