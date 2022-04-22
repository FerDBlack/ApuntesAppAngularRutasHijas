import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroeImagenPipe} from "./heroe-imagen.pipe";



@NgModule({
  declarations: [
    HeroeImagenPipe
  ],
  exports:[
    HeroeImagenPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
