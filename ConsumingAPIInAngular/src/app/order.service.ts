import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Object>  {
     return this.httpClient.get<Object>('https://reqres.in/api/products/').pipe(
       tap((data:any) => {
         console.log(data);
       }),
       catchError(this.handleError)
     );
  }

  getOrderDetails(id:any) : Observable<Object> {
    return this.httpClient.get<Object>('https://reqres.in/api/products/'+ id).pipe(
      tap((data:any) =>{
        console.log(data);
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error:any){
    console.log(error);
    return throwError(error);
    
  }
}
