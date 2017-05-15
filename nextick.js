// Experimenting with process.nextTick
const fib = x => x < 2 ? x : fib(x-1) + fib(x-2);

const exe = function (num) {
	// If we want something to execute right when the event
	// loop gets the opportunity to put something on call stack
	// we can do that using process.nextTick().
	// Here we will print something, right after our exe() function
	// finishes. This will execute before setTimeout callback.
	process.nextTick(()=>{console.log('Right at the start of next tick');});
	console.log('Starting exe...');
	setTimeout(()=>{
		console.log(`Fib(${num}): ${fib(num)}`);
		process.nextTick(()=>{console.log('3rd Tick starts here...');});
	}, 100);
	console.log('Done with exe');
};

exe(10);
