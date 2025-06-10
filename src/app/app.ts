import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Helloworld } from './helloworld/helloworld';
import { Counter } from './counter/counter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Helloworld,Counter,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myy';
    yuva(){
       var a :number =10;
      var b: number=20;
      return a+b;
  }
  
}
