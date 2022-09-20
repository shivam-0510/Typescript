var ShivamInfo = /** @class */ (function () {
    function ShivamInfo(firstName, lastName, dob, hobbies, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.hobbies = hobbies;
        this.middleName = middleName;
    }
    ShivamInfo.prototype.getHobbies = function () {
        return "".concat(this.firstName, " has following hobbies: ").concat(this.hobbies);
    };
    return ShivamInfo;
}());
var shivamInfo = new ShivamInfo("Shivam", "Gupta", "05-10-2002", ["Cricket", "Football"]);
console.log(shivamInfo.getHobbies());
/* interface SecondaryInfo{
    qualification:string;
    occupation:string;
}
interface Information extends PrimaryInfo,SecondaryInfo{
    informationId:string;
}
let shivamInfo:Information={
    firstName: "Shivam",
    lastName: "Gupta",
    dob: "05-10-2002",
    occupation: "Student",
    qualification: "B-E",
    informationId: "01"
}
console.log(shivamInfo); */ 
