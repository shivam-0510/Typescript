"use strict";
exports.__esModule = true;
exports.Company = exports.compDetails = void 0;
function compDetails(compId) {
    console.log("Copm ID: ", compId);
}
exports.compDetails = compDetails;
var Company = /** @class */ (function () {
    function Company(compId) {
        this.compId = compId;
    }
    Company.prototype.getCompDetails = function () {
        console.log("Inside getCompDetails()");
        return this.compId;
    };
    return Company;
}());
exports.Company = Company;
