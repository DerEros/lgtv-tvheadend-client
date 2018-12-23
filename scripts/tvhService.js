const TVH_SERVICE_URL = "luna://de.erna.tvhclient.credentials";

function getTvhCredentials() {
    return serviceRequestAsPromise(TVH_SERVICE_URL, {
        method: "tvh/credentials/get",
        parameters: {}
    });
}