// this program will result in an "JavaScript heap out of memory"
const fs = require('fs');

const file = fs.createWriteStream('./file');

// writing everything up in memory, before flushing to file
for(let i = 10; i < 1e7; i++) {
  file.write("Hello man\n");
}

file.end();
