import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorderComponent } from './addorder/addorder.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [

  {path: 'home' , component:OrdersComponent},
  {path: 'add', component : AddorderComponent},
  {path: 'orders/:id' , component: OrderdetailsComponent},
  {path: '*' , redirectTo:'home', pathMatch :'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
