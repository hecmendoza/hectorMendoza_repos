import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  personaje: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _personajesServices: PersonajesService) { 
    this.activatedRoute.params.subscribe(params=>{
      this._personajesServices.getPersonaje(params['id'])
      .subscribe((data: any) => {
        this.personaje.push(data);
        console.log(this.personaje[0].moves);
      });

    });
  }

}
