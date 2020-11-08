import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LITERALS } from 'src/app/core/constants';

@Component({
  selector: 'app-select-meal',
  templateUrl: './select-meal.component.html',
  styleUrls: ['./select-meal.component.scss']
})
export class SelectMealComponent implements OnInit {

  mealForm: FormGroup;
  submitted: boolean = false;
  mealData = [
    {
      id: 1,
      name: 'Breakfast'
    },
    {
      id: 2,
      name: 'Lunch'
    },
    {
      id: 3,
      name: 'Dinner'
    }
  ];
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  @Input() formData;
  mealFormErrors = LITERALS.SELECT_MEAL.ERROR_MESSAGES;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    if (Object.keys(this.formData).length && this.formData.tab1) {
      this.mealForm.patchValue({
        meal: this.formData.tab1.meal,
        member: this.formData.tab1.member
      });
    }
  }

  initializeForm() {
    this.mealForm = this.formBuilder.group({
      meal: ['', Validators.required],
      member: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  get f() { return this.mealForm.controls; }

  onNextStep() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.mealForm.invalid) {
      return;
    } else {
      this.countChange.emit(2);
      this.data.emit({ tabName: 'tab1', formData: this.mealForm.value });
    }
  }

}
