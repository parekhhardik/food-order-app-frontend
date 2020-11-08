import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMealComponent } from './select-meal.component';

describe('SelectMealComponent', () => {
  let component: SelectMealComponent;
  let fixture: ComponentFixture<SelectMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
