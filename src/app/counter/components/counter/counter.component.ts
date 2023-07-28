import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <h3>{{counter}}</h3>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()">RESET</button>
  <button (click)="increaseBy(1)">+1</button>

  `
})
export class CounterComponent{
  public title:string = 'Mi primera App de Angular';
  public counter:number=10;

  increaseBy(value:number):void{
    if (value > 0) {
      this.counter += value;
    } else if (value < 0 && this.counter > 0) {
      this.counter += value;
      if (this.counter < 0) {
        this.counter = 0;
      }
    }
  }


  reset():void{
    this.counter=10
  }
}

