// tvh_channels_service.js
// simple service, based on low-level Palmbus API

const pkgInfo = require('./package.json');
const Service = require('webos-service');
const service = new Service(pkgInfo.name);
const request = require('request-promise-native');

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

    return "";
}

function getChannels(credentials) {
    const options = {
        method: "GET",
        uri: "http://" + credentials.host + ":" + credentials.port + "/api/channel/list",
        auth: {
            "user": credentials.username,
            "pass": credentials.password,
            "sendImmediately": false
        },
        json: true
    };

    return request(options);
}

service.register("tvh/channels/list", function(message) {
    console.log("Channel list request");

    const credentials = message.payload.credentials;
    const validationResult = checkCredentials(credentials);

    if (validationResult !== "") {
        message.respond({
            returnValue: false,
            message: "Credential validation failed: " + validationResult
        })
    } else {
        getChannels(credentials)
            .then(function(response) {
                message.respond({
                    returnValue: true,
                    message: response
                })
            })
            .catch(function(e) {
                message.respond({
                    returnValue: false,
                    message: e
                })
            })
    }
});