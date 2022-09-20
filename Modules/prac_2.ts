import { Formula } from "./prac_1";
class Maths implements Formula{ 
    constructor(
        public diameter:number,
        public length:number,
        public breadth:number
    ){}
    calculateCircle(diameter: number): number {
         return 2*(diameter/2)*3.14;
    }
    calculateRectangle(length: number, breadth: number): number {
        return length*breadth;
    }
}

let dim=new Maths(4,3,5);
console.log(dim.calculateCircle(4));
console.log(dim.calculateRectangle(3,5));