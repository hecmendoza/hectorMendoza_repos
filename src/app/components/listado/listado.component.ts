import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  personajes: any[] = [];
  page = 0;
  idPersonaje = 0;

  constructor(private _personajesServices: PersonajesService) {
    this._personajesServices.getPersonajes(0)
    .subscribe((data: any) => {
      data.results.forEach((personaje:any) => {
        this.idPersonaje++;
        personaje = {id: (this.idPersonaje), name: personaje.name};
        this.personajes.push(personaje);
      });
    }); 
  }

  
  buscar(texto: String){
    this.idPersonaje = 0;
    
    this._personajesServices.getTodosPersonajes()
    .subscribe((data: any) => {
      console.log(data);
      data.results.forEach((personaje:any) => {
        this.idPersonaje++;
        
        if(personaje.name == texto){
          console.log(this.idPersonaje);
          this.personajes = [];
          personaje = {id: (this.idPersonaje), name: personaje.name};
          this.personajes.push(personaje);
        }
      });      
    });
  }

  pagination(num: number){
    this.page = this.page + num;
    this.personajes = [];
    
    if(this.page >= 0){
      this.idPersonaje = this.page * 4;

      this._personajesServices.getPersonajes(this.idPersonaje)
      .subscribe((data: any) => {
        console.log(data);
        data.results.forEach((personaje:any) => {
          this.idPersonaje++;
          personaje = {id: (this.idPersonaje), name: personaje.name};
          this.personajes.push(personaje);
        });
      });
    } 
  }

}
