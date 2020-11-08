import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LITERALS } from 'src/app/core/constants';
import { RestaurantService } from 'src/app/core/services';
// import restaurantData from './assets/restaurantData.json';

@Component({
  selector: 'app-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: ['./select-restaurant.component.scss']
})
export class SelectRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;
  submitted: boolean = false;
  restaurantData = [];
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  @Input() formData;
  restaurantFormErrors = LITERALS.SELECT_RESTAURANT.ERROR_MESSAGES;

  constructor(
    public formBuilder: FormBuilder,
    private _restaurantService: RestaurantService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.getAllRestaurant();
    if (Object.keys(this.formData).length && this.formData.tab2) {
      this.restaurantForm.patchValue({
        restaurant: this.formData.tab2.restaurant
      });
    }
  }

  initializeForm() {
    this.restaurantForm = this.formBuilder.group({
      restaurant: ['', Validators.required]
    });
  }

  get f() { return this.restaurantForm.controls; }

  getAllRestaurant() {
    this._restaurantService.getRestaurant().subscribe(response => {
      if (response['success']) {
        this.restaurantData = response['data'];
      }
    });
  }

  goPrevious() {
    this.countChange.emit(1);
  }

  onNextStep() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.restaurantForm.invalid) {
      return;
    } else {
      this.countChange.emit(3);
      this.data.emit({ tabName: 'tab2', formData: this.restaurantForm.value });
    }
  }

}
