function getGreetingServiceRequest(name, successCallback) {
    var lunaReq= webOS.service.request("luna://de.erna.tvhclient.credentials",
        {
            method:"greet",
            parameters:{
                name: name
            },
            onSuccess: function (args) {
                console.log("Request successful", args);
                successCallback(args.message);
            },
            onFailure: function (args) {
                console.error("Request failed", args);
            },
            onComplete: function (args) {
                console.warn("Request completed somehow", args);
            }
        });
    console.log("Request: ", lunaReq);
}

function getGreeting(name) {
    console.log("Requesting greeting");
    getGreetingServiceRequest(name, function(greeting) {
        showMsg("out", greeting);
    });
}

function showMsg(elementId, msg) {
    var out = $("#" + elementId);
    out.html("<h1>" + msg + "</h1>");
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("Document loaded");
    getGreeting("Luna");
});