import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  activeId: number = 1;
  formData = {};

  constructor() { }

  ngOnInit(): void {
  }

  data(data) {
    this.formData[data.tabName] = data.formData;
  }

  onCountChanged(value) {
    this.activeId = value;
  }

  onNavChange(event) {
    event.preventDefault();
  }

}
