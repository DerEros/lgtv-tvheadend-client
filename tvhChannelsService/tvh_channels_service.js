// tvh_channels_service.js
// simple service, based on low-level Palmbus API

var pkgInfo = require('./package.json');
var Service = require('webos-service');
var service = new Service(pkgInfo.name);

service.register("tvh/channels/list", function(message) {
   console.log("Channel list request");

   message.respond({
       returnValue: true,
       message: "No channels found"
   });
});