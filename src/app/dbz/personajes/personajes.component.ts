import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZSerivce } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input() personajes:Personaje[]=[]
get personajes(){
  return this.dbzService.personajes;
}
  constructor(private dbzService: DBZSerivce){}

}
