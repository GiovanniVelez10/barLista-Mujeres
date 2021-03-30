import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import {EjercicioService} from '../ejercicio.service';


@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  ejercicio:Ejercicio[];
  ejercicioSeleccionado:Ejercicio;

  constructor(private ejercicioservice:EjercicioService) {
    console.log("-----------Componente Ejercicio creado-----");
  }

    getEjercicios():void{
      this.ejercicioservice.getEjercicios().subscribe(ejercicio=>this.ejercicio=ejercicio);
    }


  ngOnInit(): void {
    this.getEjercicios();
  }

  seleccionaEjercicio(ejerc:Ejercicio):void{
    console.log("ejercicio seleccionado = " + ejerc.id);
    this.ejercicioSeleccionado=ejerc;
  }

}
