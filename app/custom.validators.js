"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.usernameValidator = function (username) {
        if (username.value.indexOf(' ') > 0) {
            return {
                'nospace': 'true'
            };
        }
        else {
            return null;
        }
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom.validators.js.map