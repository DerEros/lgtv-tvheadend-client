function getGreeting(name) {
    return "Hello " + name + "!";
}

function showMsg(elementId, msg) {
    var out = $("#" + elementId);
    out.html("<h1>" + msg + "</h1>");
}


document.addEventListener('DOMContentLoaded', function () {
    var msg = getGreeting("Luna");
    showMsg("out", msg);
});