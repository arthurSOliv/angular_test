import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from './modulo1.component';

const routes: Routes = [
  { path: '', component: Modulo1Component }, // Rota padrão do módulo filho 1
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo1RoutingModule {}
