import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root',useExisting:UpdatedMessageService
// }
)
export class UpdatedMessageService {

  private static count: number = 0;
  constructor() { 
    UpdatedMessageService.count = UpdatedMessageService.count+1;
    console.log("Number of objects created" + UpdatedMessageService.count);
  }
  sayHiFromChild(childCponentName: string) {
    return "Hello This from UpdatedMessageService "+childCponentName;
  }
}
