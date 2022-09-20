//Generic function
function compDetails(compId) {
    console.log("General value", compId);
    return compId;
}
console.log(compDetails("Shivam"));
console.log(compDetails(123));
//Generic array
function compDetail() {
    var compId = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        compId[_i] = arguments[_i];
    }
    console.log("General value", compId);
    return compId[0];
}
compDetail('1002', '1002', '1002');
compDetail(1002, 1002, 1002);
//Generic class
var Employee = /** @class */ (function () {
    function Employee(empID, empName, projectDetails) {
        this.empID = empID;
        this.empName = empName;
        this.projectDetails = projectDetails;
    }
    Employee.prototype.getEmpID = function (projId) {
        var output;
        var validId = this.projectDetails.filter(function (id) { return projId === id; });
        if (validId.length > 0) {
            output = this.empID;
        }
        return output;
    };
    return Employee;
}());
var emp = new Employee('1001', 'David', ['P2890', 'P786']);
console.log(emp.getEmpID('P786'));
console.log(emp.getEmpID('786'));
var StringCart = /** @class */ (function () {
    function StringCart(items) {
        this.items = items;
    }
    StringCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    return StringCart;
}());
var stringObj = new StringCart(['Biscuit', 'Chocolate']);
stringObj.addItem('Juice');
console.log(stringObj.items);
