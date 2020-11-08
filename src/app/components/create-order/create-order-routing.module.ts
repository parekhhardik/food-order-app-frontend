import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrderComponent } from './create-order.component';

const CREATE_ORDER_ROUTES: Routes = [
  {
    path: '',
    component: CreateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(CREATE_ORDER_ROUTES)],
  exports: [RouterModule]
})
export class CreateOrderRoutingModule { }
