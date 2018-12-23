function serviceRequestAsPromise(url, request) {
    return new Promise (function(resolve, reject) {
        request.onSuccess = function(args) { resolve(args) };
        request.onFailure = function(args) { reject(args) };

        webOS.service.request(url, request);
    });
}