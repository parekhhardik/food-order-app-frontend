import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { LITERALS } from 'src/app/core/constants';
import { RestaurantService } from 'src/app/core/services';

@Component({
  selector: 'app-select-dish',
  templateUrl: './select-dish.component.html',
  styleUrls: ['./select-dish.component.scss']
})
export class SelectDishComponent implements OnInit {

  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  @Input() formData;
  dishForm: FormGroup;
  submitted: boolean = false;
  dishData = [];
  dishes = [];
  isEdit = false;
  selectedIndex;
  dishFormErrors = LITERALS.SELECT_DISH.ERROR_MESSAGES;

  constructor(
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _restaurantService: RestaurantService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.getAllRestaurant();
    if (Object.keys(this.formData).length && this.formData.tab3 && this.formData.tab3.length) {
      this.dishes = this.formData.tab3;
    }
  }

  initializeForm() {
    this.dishForm = this.formBuilder.group({
      dish: ['', Validators.required],
      servings: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  get f() { return this.dishForm.controls; }

  getAllRestaurant() {
    this._restaurantService.getRestaurant().subscribe(response => {
      if (response['success']) {
        const fullData = response['data'];
        for (const data of fullData) {
          if(data.restaurantName === this.formData.tab2.restaurant) {
            this.dishData = data.dishes;
          }
        }
      }
    });
  }

  goPrevious() {
    this.countChange.emit(2);
  }

  onNextStep() {
    // stop here if form is invalid
    if (this.dishes.length) {
      this.countChange.emit(4);
      this.data.emit({ tabName: 'tab3', formData: this.dishes });
    }
  }

  addDish() {
    this.submitted = true;

    if (this.dishForm.invalid) {
      return;
    } else {
      if (this.checkInputForm(this.dishForm.value.servings, this.dishForm.value.dish)) {
        this.toastr.error('Already addded!');
      } else {
        if (this.isEdit) {
          this.dishes[this.selectedIndex] = this.dishForm.value;
          this.selectedIndex;
          this.isEdit = !this.isEdit;
        } else {
          this.dishes.push(this.dishForm.value);
          this.submitted = false;
        }
        this.submitted = false;
        this.dishForm.reset();
      }
    }
  }

  checkInputForm(serviceNo, name) {
    for (const data of this.dishes) {
      if (data.dish == name && data.servings == serviceNo) {
        return true;
      }
    }
    return false;
  }

  editDish(index) {
    this.dishForm.patchValue({
      dish: this.dishes[index].dish,
      servings: this.dishes[index].servings
    });
    this.isEdit = !this.isEdit;
    this.selectedIndex = index;
  }

  deleteDish(index) {
    this.dishes.splice(index, 1);
    this.dishForm.reset();
  }

}
