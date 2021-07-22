import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit,OnDestroy {

  constructor(private orderService: OrderService, private router:Router) { }

  orderService$? : Subscription;
  orders: any;
  ngOnInit(): void {

    this.orderService$ = this.orderService.getOrders().subscribe(
      (response:any)=> {
        this.orders = response.data;
      },
      (error:any) => {
        console.log("error");
      },
      ()=>{
        console.log("completed");
      }
    )
  }
  navigateToOrderDetails(id:number):void{
   this.router.navigate(["/orders",id]);

  }
  ngOnDestroy():void{
    this.orderService$?.unsubscribe();

  }

}
