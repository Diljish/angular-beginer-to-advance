import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  parentComponentData: string = "diljish";
  parentComponentNumber: number =1;
  dataFromChild: any;
  @ViewChild(ProductComponent, {static: true}) product?:ProductComponent;
  dataUsingViewChild: any;

  constructor(){

  }
  ngOnInit(){
    console.log("initialized");
    this.dataUsingViewChild = this.product?.childComponentValue;
  }
  
  
  incrementDataByOne(): void {
    this.parentComponentNumber = this.parentComponentNumber+1;
  }
  getChildData(event:any) {
   this.dataFromChild = event;
  }
}
