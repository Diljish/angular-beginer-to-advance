import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  orderId?:number;
  orderDetails:any;
  constructor(private orderService:OrderService, private router:Router , private routerState: ActivatedRoute) { }

  ngOnInit(): void {


    this.routerState.paramMap.pipe(
      switchMap((params: any) => {
        this.orderId = params.get('id');
        return this.orderService.getOrderDetails(this.orderId)
      })).subscribe(
          (response: any)=> {
            debugger;
            this.orderDetails = response.data;
            console.log(response);
          },
          (error:any) => {
            console.log(error);
          },
          ()=> {
            console.log("completed");
          }
        )
    
    // this.routerState.paramMap.subscribe(
    //   (params:any) => {
    //     this.orderId = params;
    //     console.log(this.orderId);
    //   },
    //   (error:any) =>{
    //     console.log("error");
    //   },
    //   ()=>{
    //     console.log("completed");
    //   }
    // );
    // this.orderService.getOrderDetails(this.orderId).subscribe(
    //   (response: any)=> {
    //     console.log(response);
    //   },
    //   (error:any) => {
    //     console.log(error);
    //   },
    //   ()=> {
    //     console.log("completed");
    //   }
    // )
  }

}
