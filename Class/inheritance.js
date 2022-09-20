class Account {
    constructor(accountNo, _balance, accountName) {
        this.accountNo = accountNo;
        this._balance = _balance;
        this.accountName = accountName;
    }
    get balance() {
        return this._balance;
    }
    set balance(no) {
        this._balance = no;
    }
    deposit(amt) {
        this._balance += amt;
        console.log("Balance: ", this.balance);
    }
}
class SavingsAccount extends Account {
    constructor(rateOfInterest, acctNo, balance, name) {
        super(acctNo, balance, name);
        this.rateOfInterest = rateOfInterest;
    }
    addInterest() {
        let interest = this.balance * this.rateOfInterest / 100;
        console.log("Account name: ", this.accountName);
        super.deposit(interest);
    }
}
SavingsAccount.accountType = 'Savings';
console.log(SavingsAccount.accountType);
let savObj = new SavingsAccount(2.5, 123456, 8000, "Shivam Gupta");
savObj.balance = 9000;
console.log("Account name: ", this.accountName);
savObj.addInterest();
