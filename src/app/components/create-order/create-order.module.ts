import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateOrderComponent } from './create-order.component';
import { CreateOrderRoutingModule } from './create-order-routing.module';
import { SelectMealComponent } from './select-meal/select-meal.component';
import { SelectRestaurantComponent } from './select-restaurant/select-restaurant.component';
import { SelectDishComponent } from './select-dish/select-dish.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    CreateOrderComponent,
    SelectMealComponent,
    SelectRestaurantComponent,
    SelectDishComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CreateOrderRoutingModule
  ]
})
export class CreateOrderModule { }
