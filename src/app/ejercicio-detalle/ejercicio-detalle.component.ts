import { Component, OnInit, Input } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

    ejerc:Ejercicio;



  constructor(private route:ActivatedRoute,
              private ejercicioService:EjercicioService,
              private location:Location) { }

  ngOnInit(): void {
    this.getEjercicio();
  }
  getEjercicio():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.ejercicioService.getEjercicio(id).subscribe(ejercicio=>this.ejerc=ejercicio)//ejerc o ejercicio probar
    //debugger;
  }

  goback():void{
    this.location.back();
  }

}
