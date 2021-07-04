import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [{ path: 'customers', loadChildren: () => import('./cutomers/cutomers.module').then(m => m.CutomersModule) },
 { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 {path:'home' , component:Child1Component},
 {path:'',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
