abstract class basicInfo{
    abstract firstName:string;
    middleName?:string;
    lastName:string;
    dob:Date;

    abstract getAgeDetails():number
}

class govtDetails extends basicInfo{
    constructor(
        public firstName:string,
        public lastName:string,
        public dob:Date,
        private drivingLicenseStatus:boolean,
        public middleName?:string
    ){
        super();
    }
    getAgeDetails(): number {
        let difference =Date.now()-this.dob.getTime();
        let age_data=new Date(difference);
        return Math.abs(age_data.getUTCFullYear()-1970);
    }
    getLicenceExtension():string{
        if(this.drivingLicenseStatus){
            return "Yes"
        }else{
            return "No";
        }
    }
}