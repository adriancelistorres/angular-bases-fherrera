import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name :string="iron man";
  public age:number=32;
   
  get CapitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name='Spiderman'
  }

  changeAge():void{
    this.age=12
  }

  resetForm():void{
     this.name="iron man";
     this.age=32;
    //  document.querySelector('h1')!.innerHTML='<h2>Desde angular</h2>'

    // document.querySelectorAll('h1').forEach(element=>{
    //   element.innerHTML='<h1>Desde angular</h1>'
    // })

  }
}
