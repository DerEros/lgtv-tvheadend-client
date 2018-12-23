function serviceRequestAsPromise(url, request) {
    return new Promise (function(resolve, reject) {
        request.onSuccess = resolve;
        request.onFailure = reject;

        webOS.service.request(url, request);
    });
}