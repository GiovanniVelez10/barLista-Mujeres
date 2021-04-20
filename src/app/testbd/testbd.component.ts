import { Component, OnInit } from '@angular/core';
import {AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testbd',
  templateUrl: './testbd.component.html',
  styleUrls: ['./testbd.component.css']
})
export class TestbdComponent implements OnInit {
  ejercicios: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.ejercicios = firestore.collection('lista-mujeres-angular-default-rtdb').valueChanges();
   }

  ngOnInit(): void {
  }

}
