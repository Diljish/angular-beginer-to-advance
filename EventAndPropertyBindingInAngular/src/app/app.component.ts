import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  productList?: IProduct[];
  toggleImageStatus: boolean= true;
  imageWidth: number = 50;
  imageMargin: number =2;
  constructor(){

  }
  ngOnInit() {
    this.productList = this.getProductList();

    }
    getProductList(): IProduct[]{
return [
  {
    indexNumber: 1,
    image: 'https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70',
    price: 8999,
    ramSize: '4 GB',
    battery: '5000 mAh',
    warrenty: '1 year'
  },
  {
    indexNumber: 2,
    image: 'https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70',
    price: 8999,
    ramSize: '4 GB',
    battery: '5000 mAh',
    warrenty: '1 year'
  },
  {
    indexNumber: 3,
    image: 'https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70',
    price: 8999,
    ramSize: '4 GB',
    battery: '5000 mAh',
    warrenty: '1 year'
  }
]
    }
    toggleImage():void {
   this.toggleImageStatus= !this.toggleImageStatus;
    }
}
