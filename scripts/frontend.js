function showMsg(elementId, msg) {
    const out = $("#" + elementId);
    out.html("<h1>" + msg + "</h1>");
}

document.addEventListener('DOMContentLoaded', function () {
    getBasicChannelList()
        .then(function(credentials) {
            showMsg("out", JSON.stringify(credentials));
        })
        .catch(function(e) { console.log("Error occured while getting credentials: ", e)});
});