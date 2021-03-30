import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import { Ejercicio } from './ejercicio';
import {EJERCICIOS} from './colletion-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {



  constructor() { }

  getEjercicios():Observable<Ejercicio[]>{
    return of(EJERCICIOS);

  }
}
