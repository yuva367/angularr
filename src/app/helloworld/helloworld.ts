import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  imports: [],
  templateUrl: './helloworld.html',
  styleUrl: './helloworld.css'
})
export class Helloworld  {
 
  // Define a user object with name and id properties
  /*user = {
    us: "yuva",
    id: 1,
  }*/
 /*user:any = null;s
 ngOnInit(){
  this.user = {
    name: "yuva",

  }
 }*/

   clickcount = 0;
   countme(){
    this.clickcount++

   }
   linkUrl ="https://www.w3schools.com/typescript/typescript_functions.php";
}
