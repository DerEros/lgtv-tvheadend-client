// tvh_credentials_service.js
// simple service, based on low-level Palmbus API

var pkgInfo = require('./package.json');
var Service = require('webos-service');
var credentials = require('./credentials');
var service = new Service(pkgInfo.name);

// a method that always returns the same value
service.register("greet", function(message) {
	console.log("In greet callback");

	var name = message.payload.name;
	if (name === undefined) {
	    name = "foo!";
    }

	message.respond({
		returnValue: true,
		message: "Hello, " + name + "!!! " + JSON.stringify(credentials)
	});
});
