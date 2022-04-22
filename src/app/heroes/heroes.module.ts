import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}    from "@angular/forms";

//Componentes
import { AgregarComponent }       from './pages/agregar/agregar.component';
import { BuscarComponent }        from './pages/buscar/buscar.component';
import { HeroeComponent }         from './pages/heroe/heroe.component';
import { HomeComponent }          from './pages/home/home.component';
import { ListadoComponent }       from './pages/listado/listado.component';
import { HeroeTarjetaComponent }  from './components/heroe-tarjeta/heroe-tarjeta.component';

//Módulos externos
import {HeroesRoutingModule} from "./heroes-routing.module";
import {FlexLayoutModule}    from "@angular/flex-layout";
import {MaterialModule}      from "../material/material.module";
import {PipesModule}         from "../pipes/pipes.module";



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
    PipesModule,
  ]
})
export class HeroesModule { }
