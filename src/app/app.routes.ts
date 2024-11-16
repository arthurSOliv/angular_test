import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () =>
      import('./modulo1/modulo1.module').then((m) => m.Modulo1Module),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./modulo2/modulo2.module').then((m) => m.Modulo2Module), // Carrega o Módulo 2
  },
  {
    path: '',
    redirectTo: '/module1', // Redireciona para o módulo 1 como padrão
    pathMatch: 'full',
  },
  {
    path: '**', // Rota para 404 ou caminho não encontrado
    redirectTo: '/module1',
  },
];
