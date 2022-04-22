import {Pipe, PipeTransform} from '@angular/core';
import {Heroe} from "../heroes/interfaces/heroes.interface";

@Pipe({
  name: 'heroeImagen'
})
export class HeroeImagenPipe implements PipeTransform {

  transform(value: Heroe): string {
    return `assets/heroes/${value.id}.jpg`;
  }

}
