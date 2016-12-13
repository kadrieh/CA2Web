import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {

  height:string = "";

  weight: string = "";

  stone: number = 0;
  pounds: number = 0;
  kilo: number = 0;

  feet: number = 0;
  inches: number = 0;
  metres: number = 0;

  bmi: number = 0;
  result1: string = "";
  result2: string = "";


  constructor() { }

  convertH(id){
    this.height = id
    
    if (this.height === "feet"){
       this.metres = this.feet * 0.3048;
    }else if(this.height === "inches"){
      this.metres += this.inches*0.0254;
      this.metres = this.twoDecPlace(this.metres);
    }else
    {
      this.feet = this.metres * 3.28084;
      this.inches = this.feet * 12.000;
      this.inches = this.inches%12;
      this.inches = this.twoDecPlace(this.inches);
      this.feet = this.twoDecPlace(this.feet);
    }
   }

  //converting Weights
  convertW(id){
    
    this.weight = id;
    if (this.weight === "stone"){
       this.kilo = this.stone * 6.3503;
    }else if(this.weight === "pound"){
      this.kilo += this.pounds * 0.4536;
    }else{
       this.stone = this.kilo / 6.3503;
       this.pounds = this.stone * 14;
       this.pounds = this.pounds%14;
       this.stone = this.twoDecPlace(this.stone);
       this.pounds = this.twoDecPlace(this.pounds);
    }
      this.kilo = this.twoDecPlace(this.kilo);
  }
  twoDecPlace(value){
    value = Math.round(value * 100) / 100;
    return value;
  }

  BMRCalculate(){
    this.bmi = this.kilo / (this.metres * this.metres);
    this.bmi = this.twoDecPlace(this.bmi);
  
    if(this.bmi < 18){
      this.result1 = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.result2 = "Underweight Range";
    }else if(this.bmi >=18 && this.bmi <= 25){
      this.result1 = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.result2 = "Normal Range";
    }else{
      this.result1 = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.result2 = "Overweight Range";
    }
  }
  getColor()
  {
    if(this.bmi < 18) 
    {
      return "red";
    }
    if(this.bmi >= 18 && this.bmi <= 25)
    {
      return "green";
    }
    if(this.bmi > 25)
    {
      return "orange";
    }
  }
  ngOnInit() {
  }

}
