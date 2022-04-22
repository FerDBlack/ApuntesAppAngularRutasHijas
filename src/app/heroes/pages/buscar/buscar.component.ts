import { Component, OnInit } from '@angular/core';
import {Heroe} from "../../interfaces/heroes.interface";
import {HeroesService} from "../../services/heroes.service";
import {MatError} from "@angular/material/form-field";
import {MatAutocompleteActivatedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino:string = "";
  heroes:Heroe[] = [];
  heroeSeleccionado!:Heroe | undefined;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscador(){
    this.heroesService.getSugerencia(this.termino.trim())
      .subscribe( heroes =>this.heroes = heroes);
  }

  opcionSeleccionada(even:MatAutocompleteActivatedEvent){

    //En caso de que el evento no tenga valor,
    // declarar undefine el heroeSeleccionado
    if (!even.option?.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    //Mostrar en el autocomplete la opción seleccionada.
    let heroe:Heroe = even.option?.value
    this.termino = heroe.superhero;

    //Buscar la opción seleccionada
    this.heroesService.getHeroeId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe)
  }


}
