import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges{

  @Input() data?: number;
  @Output() dataValueChanges = new EventEmitter();
  childComponentValue: number  = 0;
  value:number =0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  incrementData(){
    this.childComponentValue = this.childComponentValue +1;
    this.dataValueChanges.emit(this.childComponentValue);
  }
  templateReferenceCall(){
    console.log("Hiii");
    this.value = this.value;
  }

}
