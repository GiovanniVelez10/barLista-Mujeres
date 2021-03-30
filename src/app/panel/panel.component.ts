import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import {EjercicioService} from '../ejercicio.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {


  ejercicio:Ejercicio[];

  constructor(private ejercicioservice:EjercicioService) { }

  ngOnInit(): void {
  }

  getEjercicios():void{
    this.ejercicioservice.getEjercicios().subscribe(ejercicio=>this.ejercicio=ejercicio);
  }

}
