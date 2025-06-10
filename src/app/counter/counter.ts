import { CommonModule } from '@angular/common';
import { Component,computed,signal,Signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
 /* countme = signal(0);

  doubleCount:Signal<number> = computed(() => this.countme()*2);
  incre() {
   this.countme.set(this.countme() + 1);
  }*/
  
  items : string[] = [
    'ggdjgjdg',
    'hhbhjb',
    'iknjjj'
  ];
}
