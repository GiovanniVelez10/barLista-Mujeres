import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path:'ejercicio', component:EjercicioComponent},
  {path:'panel', component:PanelComponent},
  {path:'',redirectTo:'/panel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
