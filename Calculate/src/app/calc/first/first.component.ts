import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  result: Number= 0;
  A: String[]=[];
  result1: String= "Not executed";

  constructor() { 
  }

  ngOnInit(): void {
  }

  doThis(num1:string, num2:string)
  {
    let number1 = parseInt(num1);
    let number2 =parseInt(num2);
    this.result= number1+number2;
    console.log(this.result);
    return this.result; 
    
  }

  doThis1(num3:string)
  {
    let number3 = parseInt(num3);
    for(let i = 1; i <= number3; i++) {
      for(let j=i+1; j<=number3;j++)
      {
        if(i*j == number3) {
          this.A.push(i+","+j);
        }
      }
  }
  console.log(this.A);
  return this.A ;
}
}
