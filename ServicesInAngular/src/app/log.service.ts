import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private static count=0;
  constructor() {
    LogService.count = LogService.count +1;
    console.log("Number of objects created (Is Service By default Singleton?)"+LogService.count);
   }

  sayHello(message:string){
    return "Hi " +message;
  }
}
