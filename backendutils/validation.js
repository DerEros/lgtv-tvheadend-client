module.exports = {
    checkCredentials: function(credentials) {
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
    }
};