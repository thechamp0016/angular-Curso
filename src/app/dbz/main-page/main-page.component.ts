import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DBZSerivce } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {


  /*
  nuevo:Personaje={
    nombre:'',
    poder:0
  }
  */

/*
  agregarNuevoPersonaje(nuevoPersonaje:Personaje){
    this.personajes.push(nuevoPersonaje);
    console.log(nuevoPersonaje);
  }
  
 agregarPersonaje(event:any):void{
   event.preventDefault();
    console.log("Hey..");
 }
 */
 constructor(){ }

}
