import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDishComponent } from './select-dish.component';

describe('SelectDishComponent', () => {
  let component: SelectDishComponent;
  let fixture: ComponentFixture<SelectDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
