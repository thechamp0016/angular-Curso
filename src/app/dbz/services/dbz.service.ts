import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';



@Injectable()
export class DBZSerivce{
    
    private _personajes:Personaje[]=[
        {
            nombre:'Goku',
            poder:15000
        },
        {
            nombre:'Vegeta',
            poder:14000
        }
      ];


      get personajes():Personaje[]{
          return [...this._personajes];
      }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push( personaje );
    }


    constructor(){}
}