var productStatus = true;
var productId = 1007;
var productName = "Redmi Note 10 pro";
var ScreenSize = 15.21;
ScreenSize = "6.00 inches";
var productDescription = "The " + productName + " is a well equiped on-demand smartphone with " + ScreenSize;
console.log(productDescription);
//let producPrice={black:9000,gold:12000,silver:10000,red:8000};
var productPrice;
(function (productPrice) {
    productPrice[productPrice["black"] = 9000] = "black";
    productPrice[productPrice["gold"] = 12000] = "gold";
    productPrice[productPrice["silver"] = 10000] = "silver";
    productPrice[productPrice["red"] = 9000] = "red";
})(productPrice || (productPrice = {}));
console.log(productPrice.black);
console.log(productId['red']);
