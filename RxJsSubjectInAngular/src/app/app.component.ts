import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'RxJS Subject Demo';
  observer1$? : Subscription;
  observer1: number[] = [];
  showObserver1 = false;

  observer2$? : Subscription;
  observer2: number[] = [];
  showObserver2 = false;

  observer3$? : Subscription;
  observer3: number[] = [];
  showObserver3 = false;

  constructor(private appServeice: AppService){

  }
  subscribe1():void {
    this.observer1$ = this.appServeice.count$?.subscribe(
      (data:any)=> {
        this.observer1.push(data);

      },
      (error:any) => {
        console.log("error");
      },
      ()=>{
        console.log("complete");
        this.showObserver1 = true;

      }
    )

  }

  subscribe2():void  {
    this.observer2$ = this.appServeice.count$?.subscribe(
      (data)=> {
        this.observer2.push(data);
      },
      (error) => {
        console.log("error");
      },
      ()=>{
        console.log("completed");
        this.showObserver2 = true;
      }
    )
  }

  subscribe3():void  {
    this.observer3$ = this.appServeice.count$?.subscribe(
      (data)=> {
        this.observer3.push(data);
      },
      (error) => {
        console.log("error");
      },
      ()=>{
        console.log("completed");
        this.showObserver3 = true;
      }
    )
  }

  ngOnDestroy(){
    this.observer1$?.unsubscribe();
    this.observer2$?.unsubscribe();
    this.observer3$?.unsubscribe();
  }
}
