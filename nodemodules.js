// If you want to ensure that the module is run
// directly, i.e. not by 'require()' 
console.log(require.main === module);

// To get the filename of the main module
console.log(require.main.filename);
