import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  @Input() formData;

  constructor() { }

  ngOnInit(): void {
  }

  goPrevious() {
    this.countChange.emit(3);
  }

  finish() {
    console.log(this.formData);
  }

}
