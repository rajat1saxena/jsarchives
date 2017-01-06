var f = require('./baseconvert');
var conv = f.convert(76, 5);
console.log(conv, f.convertback(conv, 5));
console.log(f.convert(140, 8));
console.log(f.convert(100, 10));
console.log(f.convert(24, 5));
