// tvh_channels_service.js
// simple service, based on low-level Palmbus API

const pkgInfo = require('./package.json');
const Service = require('webos-service');
const service = new Service(pkgInfo.name);

function checkCredentials (credentials) {
    const expectedFields = ["host", "port", "username", "password"];

    if (credentials === undefined) {
        return "No credentials provided";
    }

    expectedFields.forEach(function (fieldName) {
        const field = credentials[fieldName];
        if (field === undefined || field == "") {
            return "Value for field '" + fieldName + "' expected but field is empty/undefined";
        }
    });
}

service.register("tvh/channels/list", function(message) {
   console.log("Channel list request");

   const validationResult = checkCredentials(message.payload.credentials);

   if (validationResult !== "") {
       message.respond({
           returnValue: false,
           message: "Credential validation failed: " + validationResult
       })
   } else {
       message.respond({
           returnValue: true,
           message: "No channels found"
       });
   }
});