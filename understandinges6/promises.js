// A sweet little Promise enabled function.
// No async task is performed here, thought it can be easily implemented.
const adder = (a, b) => new Promise((resolve, reject) => 
                            a && b ? resolve(a + b) : reject(Error('Invalid numbers')));
                            
function onFullfill (result) {
    console.log(result);
};

function onReject (err) {
    console.error(err);
};

// Driver program
adder(3, 4).then(onFullfill, onReject); // Outputs '7'
adder(3, undefined).then(onFullfill, onReject); // Errors out
adder(null, 4).then(onFullfill, onReject); // Errors out