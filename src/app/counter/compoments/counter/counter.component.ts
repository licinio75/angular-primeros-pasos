import { Component } from "@angular/core"

@Component({
  selector: 'app-counter',
  template: `

    <H3>{{ counter }}</H3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Res</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent{
 public counter: number = 10;

  increaseBy(val:number):void{
    this.counter = this.counter + val;
  }

  reset():void{
    this.counter = 10;
  }
}
