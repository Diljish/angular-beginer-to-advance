import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  counter = 0;
  // public count$? : Subject<number>;
  // public count$? : BehaviorSubject<number>;
  // public count$? : ReplaySubject<number>;
  public count$? : AsyncSubject<number>;
  constructor() {
    this.nextData();
    
   }

   nextData(){
    // this.count$ = new Subject<number>();
    // this.count$ = new BehaviorSubject<number>(0);
    // this.count$ = new ReplaySubject<number>();
    this.count$ = new AsyncSubject<number>();
    setInterval (()=>{
      this.counter = this.counter +1;
      if(this.counter >=20){
        this.count$?.complete();
      }
      this.count$?.next(this.counter);
    },1000);

   }
}
