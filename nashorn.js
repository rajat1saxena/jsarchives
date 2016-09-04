// This js script is meant to be run on Oracle Nashorn
var data = {
	foo: "bar",
	time: new Date()
};

// Shell invocation
var lines = 
`ls -lsa`.split("\n");
for each (var line in lines) {
	print("|> " + line);
}
