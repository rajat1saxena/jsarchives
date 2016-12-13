// Functional Pattern

// preparation: from "The Good Parts"
Function.prototype.method = function (name, func) {
	this[name] = func;
	return this;
}
// The Good Parts: Page 54 (2nd Para)
Object.method ('superior' , function (name) {
	var that = this;
	var super_method = that[name];
	return function () {
		return super_method.apply (that, arguments);
	}
});
// preparation ends here

var per = function (name, my) {
	this.name = name;
	// create a new secret for this person
	my.per_secret = 'an23';
}

per.prototype.get_name = function () {
	return this.name;
}

// Following is the main variable implementing the functional 
// pattern
var perfunc = function (spec, my) {
	var that;
	my = my || {};

	// private variables 
	var alias = spec.name + 'hulahoop';
	var getAlias = function () {
		return alias;
	}

	// create a per object
	that = new per (spec.name, my);
	// public function
	that.getMyAlias = function () {
		return getAlias();
	}
	that.getSecrets = function () {
		var myarr = [];
		for (i in my) { myarr.push(i + ":" + my[i]); }
		return myarr;
	}
	
	
	// add new method to shared variable 'my'
	my.perfunc_secret = 't32kj2';
	
	return that;
}
	
var perfobj = new perfunc ({name: 'Rajat'});
console.log(perfobj);
var fakeobj = {
	getAlias: function () { return 'faked'; }
}
// no faking by other object, as perfunc is not using 'this' in
// its implementation, it will still print name with '...hulahoop'
console.log(perfobj.getMyAlias.apply(fakeobj, arguments));

console.log(perfobj.getSecrets());
