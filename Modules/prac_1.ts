export interface Formula{
    diameter:number;
    length:number;
    breadth:number;
    calculateCircle(diameter:number):number
    calculateRectangle(length:number,breadth:number):number
}
