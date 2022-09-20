var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeliveryDetails = /** @class */ (function () {
    function DeliveryDetails(city, area, doorNo) {
        this.city = city;
        this.area = area;
        this.doorNo = doorNo;
    }
    return DeliveryDetails;
}());
var FoodOrder = /** @class */ (function (_super) {
    __extends(FoodOrder, _super);
    function FoodOrder(orderId, type, 
    //public foodList:string[],
    deliveryReq, contactNo, city, area, doorNo, deilveryDetails) {
        var _this = _super.call(this, city, area, doorNo) || this;
        _this.orderId = orderId;
        _this.type = type;
        _this.deliveryReq = deliveryReq;
        _this.contactNo = contactNo;
        _this.deilveryDetails = deilveryDetails;
        _this.restaurantList = ["Kwality", "Pyramid", "Katani Dhaba"];
        return _this;
    }
    FoodOrder.prototype.foodAvailableList = function () {
        if (this.type == "Veg") {
            var food = ["Dal", "Roti", "Paneer"];
            var ans = console.log("Available food is: ".concat(food));
            return ans;
        }
        else if (this.type == "Non-Veg") {
            var food = ["Chicken", "Chicken Masala"];
            var ans = console.log("Available food is: ".concat(food));
            return ans;
        }
        else {
            var food = ["Ice-Cream", "Ras Malai"];
            var ans = console.log("Available food is: ".concat(food));
            return ans;
        }
    };
    FoodOrder.prototype.locationAvailable = function () {
        if (this.city == "Mohali") {
            return [this.restaurantList[1], this.restaurantList[2]];
        }
        else {
            return [this.restaurantList[0]];
        }
    };
    return FoodOrder;
}(DeliveryDetails));
var order = new FoodOrder("101", "Veg", true, "8808", "Mohali", "Punjab");
console.log(order.foodAvailableList());
console.log(order.locationAvailable());
