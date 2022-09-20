interface PrimaryInfo{
    firstName:string;
    middleName?:string;
    lastName:string;
    dob:string;

    getHobbies():string;
}

class ShivamInfo implements PrimaryInfo{
    constructor(
        public firstName:string,
        public lastName:string,
        public dob:string,
        private hobbies:string[],
        public middleName?:string
        ){}
        getHobbies():string{
            return `${this.firstName} has following hobbies: ${this.hobbies}`
        }
}
let shivamInfo=new ShivamInfo("Shivam","Gupta","05-10-2002",["Cricket","Football"]);
console.log(shivamInfo.getHobbies())
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