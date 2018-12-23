const TVH_BASE_SERVICE_URL = "luna://de.erna.tvhclient";
const TVH_CREDENTIALS_SERVICE_URL = TVH_BASE_SERVICE_URL + ".credentials";
const TVH_CHANNELS_SERVICE_URL = TVH_BASE_SERVICE_URL + ".channels";

function getTvhCredentials() {
    return serviceRequestAsPromise(TVH_CREDENTIALS_SERVICE_URL, {
        method: "tvh/credentials/get",
        parameters: {}
    });
}

function getBasicChannelList() {
    return serviceRequestAsPromise(TVH_CHANNELS_SERVICE_URL, {
       method: "tvh/channels/list",
       parameters: {}
    });
}