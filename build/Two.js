"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var AppsTwo = /** @class */ (function () {
    function AppsTwo() {
        console.log("HALLO VANUIT DE 2e CLASS");
        console.log(_.partition([1, 2, 3, 4], function (n) { return n == 2; }));
    }
    AppsTwo.stom = function () {
        console.log("STOM");
    };
    AppsTwo.prototype.testDing = function (num) {
        return num * 2;
    };
    return AppsTwo;
}());
exports.AppsTwo = AppsTwo;
