function getTvhCredentials() {
    return serviceRequestAsPromise("luna://de.erna.tvhclient.credentials", {
        method: "tvh/credentials/get",
        parameters: {}
    });
}

function showMsg(elementId, msg) {
    const out = $("#" + elementId);
    out.html("<h1>" + msg + "</h1>");
}

document.addEventListener('DOMContentLoaded', function () {
    getTvhCredentials()
        .then(function(credentials) {
            showMsg("out", JSON.stringify(credentials));
        })
        .catch(function(e) { console.log("Error occured while getting credentials: ", e)});
});