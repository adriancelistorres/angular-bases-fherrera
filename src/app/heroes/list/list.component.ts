import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName:string[]=['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  public deletedHeroeArray?:string[]=[];	

  removeLastteHeroe():void{
    //remueve el primer elemento del array
    //this.heroesName.shift();

    //remueve el ultimo elemento del array
    const deletedhero:string|any=this.heroesName.pop();
    console.log(deletedhero);


      this.deletedHeroeArray?.push(deletedhero);
    
  
  }
}
