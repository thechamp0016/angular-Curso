import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','IronMan', 'Thor','Hulk','Capitan America'];
  heroeBorrado:string = '';

  borrarHeroe():void{
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
