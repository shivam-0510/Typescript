function compDetails<T>(compId:T):void{
    console.log("Copm ID: ",compId);
}

class Company<T>{
    constructor(private compId:T){}
    getCompDetails():T{
        console.log("Inside getCompDetails()");
        return this.compId;
    }
}
export {compDetails,Company}