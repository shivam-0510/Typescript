class DeliveryDetails{
    constructor(
        public city:string,
        public area:string,
        public doorNo?:string
    ){}
}
class FoodOrder extends DeliveryDetails{
    public restaurantList:string[]=["Kwality","Pyramid","Katani Dhaba"];
    constructor(
        public orderId:string,
        public type:string,
       //public foodList:string[],
        public deliveryReq:boolean,
        public contactNo:string,
        city:string,
        area:string,
        doorNo?:string,
        public deilveryDetails?:DeliveryDetails,
    ) {
        super(city,area,doorNo);
    }
    foodAvailableList():string[]{
        if(this.type=="Veg"){
            const food:string[]=["Dal","Roti","Paneer"];
            const ans:any=console.log(`Available food is: ${food}`);
            return ans;
        }
        else if(this.type=="Non-Veg"){
            const food:string[]= ["Chicken","Chicken Masala"];
            const ans:any=console.log(`Available food is: ${food}`);
            return ans;
        }
        else{
            const food:string[]=["Ice-Cream","Ras Malai"];
            const ans:any=console.log(`Available food is: ${food}`);
            return ans;
        }
    }

    locationAvailable():string[]{
        if(this.city=="Mohali"){
            return [this.restaurantList[1],this.restaurantList[2]];
        }
        else{
            return [this.restaurantList[0]];
        }
    }
}

let order=new FoodOrder("101","Veg",true,"8808","Mohali","Punjab");
console.log(order.foodAvailableList());
console.log(order.locationAvailable());