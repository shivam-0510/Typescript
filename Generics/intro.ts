//Generic function
function compDetails<T>(compId:T):T{
    console.log("General value",compId);
    return compId;
}
console.log(compDetails("Shivam"));
console.log(compDetails(123));

//Generic array
function compDetail<T>(...compId:T[]):T{
    console.log("General value",compId);
    return compId[0];
}
compDetail('1002','1002','1002');
compDetail(1002,1002,1002);

//Generic class
class Employee<T>{
    constructor(
        private empID:T,
        private empName:string,
        private projectDetails:string[]
    ){}
    getEmpID(projId:string){
        let output;
        let validId=this.projectDetails.filter(id=>projId===id);
        if(validId.length>0){
            output=this.empID;
        }
        return output;
    }
}

var emp=new Employee('1001','David',['P2890','P786']);
console.log(emp.getEmpID('P786'));
console.log(emp.getEmpID('786'));

//Generic interfaces
interface Cart<T>{
    items:T[];
    addItem(item:T):void;
}
class StringCart implements Cart<string>{
    constructor(
        public items:string[]
    ) {}
    addItem(item: string): void {
        this.items.push(item);
    }
}
let stringObj=new StringCart(['Biscuit','Chocolate']);
stringObj.addItem('Juice');
console.log(stringObj.items);