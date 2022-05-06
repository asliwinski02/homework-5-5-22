import display from "./display";

// place your code on line 5 above the export statement below

class Snake {}
 private currentPosition: number;
 private currentDirection: number;
 constructor() {
   this.currentPosition= new Point(0);
   this.currentDirection= new Point(0);
 }
 public move(numSquares: number) {
   if (this.currentDirection=== 1) {
     this.currentPosition= this.currentPosition + numSquares;
   } else {
     this.currentPosition = this.currentPosition - numSquares;
   }
 }
 public move(numSquares: number) {
   if (this.position=new Point(this.position.x,+1));
   else{
     this.position.x= +1
   }
 public moveBy(numSquares: number)
 if(this.position=new Point(this.position.y, -1));
 else{
   this.position.y=-1
 }
 
 }



export default Snake;
