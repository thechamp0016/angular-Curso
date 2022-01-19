import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZSerivce } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent{
  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  constructor(private dbzservice:DBZSerivce){}
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  
  agregar():void{
    if(this.nuevo.nombre.trim().length===0){return;}
    //this.onNuevoPersonaje.emit(this.nuevo);    
    this.dbzservice.agregarPersonaje(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
}
