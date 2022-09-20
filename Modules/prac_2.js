"use strict";
exports.__esModule = true;
var Maths = /** @class */ (function () {
    function Maths(diameter, length, breadth) {
        this.diameter = diameter;
        this.length = length;
        this.breadth = breadth;
    }
    Maths.prototype.calculateCircle = function (diameter) {
        return 2 * (diameter / 2) * 3.14;
    };
    Maths.prototype.calculateRectangle = function (length, breadth) {
        return length * breadth;
    };
    return Maths;
}());
var dim = new Maths(4, 3, 5);
console.log(dim.calculateCircle(4));
console.log(dim.calculateRectangle(3, 5));
