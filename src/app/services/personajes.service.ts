import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getTodosPersonajes(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }
  
  getPersonajes(num: number){
    console.log(num);
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=4&offset='+num);
  }

  getPersonaje(id: number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id);
  }

}
