class Account{
    constructor(
        public accountNo:number,
        private _balance:number,
        protected accountName?:string
    ){}
    get balance():number{
        return this._balance;
    }
    set balance(no:number){
        this._balance=no;
    }
    deposit(amt:number){
        this._balance+=amt;
        console.log("Balance: ",this.balance);
    }
}

class SavingsAccount extends Account{
    static accountType='Savings'
    constructor(
        public rateOfInterest:number,
        acctNo:number,
        balance:number,
        name?:string
    ){
        super(acctNo,balance,name);
    }
    addInterest(){
        let interest=this.balance*this.rateOfInterest/100;
        console.log("Account name: ",this.accountName);
        super.deposit(interest);
    }
}

console.log(SavingsAccount.accountType);
let savObj=new SavingsAccount(2.5,123456,8000,"Shivam Gupta");
savObj.balance=9000;
console.log("Account name: ",this.accountName);
savObj.addInterest();

