import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/create-order/create-order.module').then(m => m.CreateOrderModule)
  },
  {
    path: '**',
    redirectTo: '/sample/sample-component'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
