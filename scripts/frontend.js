function showMsg(elementId, msg) {
    const out = $("#" + elementId);
    out.html("<h1>" + msg + "</h1>");
}

document.addEventListener('DOMContentLoaded', function () {
    getTvhCredentials()
        .then(function(credentials) {
            console.log("Credentials retrieved successfully");
            return getBasicChannelList(credentials);
        })
        .then(function(channels) {
            console.log("Channels retrieved successfully", channels);
            showMsg("out", JSON.stringify(channels));
        })
        .catch(function(e) { console.log("Error occured while getting credentials: ", e)});
});