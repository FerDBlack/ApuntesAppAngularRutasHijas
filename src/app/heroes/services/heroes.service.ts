import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Heroe} from "../interfaces/heroes.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url:string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  getHeroeId(id:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
  }

  getSugerencia(termino:string):Observable<Heroe[]>{

     return this.http.get<Heroe[]>(`${this.url}/heroes?q=${termino}`);
  }
}
