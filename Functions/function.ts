let productDetails=()=>{

    /*
        let details;
        if(!prodName){
            enum prodList {Samsung=1001,Apple,Redmi,Realme,Oneplus,Oppo}
            prodName=prodList[prodId];
        }
        if(prodName){
            if(prodStatus){
                details=prodName+" is available in "+colors;
            }
            else{
                details=prodName+" is out of stock in "+colors;
            }
        }
        return details;
    */

    let producList:string[]=["Samsung","Apple","Redmi","Realme","Oneplus"];
    producList.forEach((product)=>{console.log(product);})
}
productDetails();
/*
    console.log(productDetails(1007,false,'Note 5','Black','Red','Silver'));
*/
var studId = (student: any): string => {
    let ans="";
	if (student.studentId === 'I1001') {
		return ans=student.studentName;
	}
	else ans='Unknown Details';
    return ans;
}
console.log(studId({studentId: 'I10011', studentName: 'David'}));

var empHikeDetails = (...empArray: any[]) => empArray.findIndex(emp => emp.empId === 'I1001');
console.log(empHikeDetails({ empId: 'I1001', empName: 'Alpha' }, 
{ empId: 'I1002', empName: 'Charlie' }, 
{ empId: 'I1003', empName: 'David' }, 
{ empId: 'I1001', empName: 'Harry' }));
