import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { PanelComponent } from './panel/panel.component';
import {EjercicioDetalleComponent} from './ejercicio-detalle/ejercicio-detalle.component';
import {TestbdComponent} from './testbd/testbd.component';


const routes: Routes = [
  {path:'ejercicio', component:EjercicioComponent},
  {path:'testDB', component:TestbdComponent},
  {path:'detalle/:id', component:EjercicioDetalleComponent},
  {path:'panel', component:PanelComponent},
  {path:'',redirectTo:'/panel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
