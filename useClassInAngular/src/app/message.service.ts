import { Injectable } from '@angular/core';
import { UpdatedMessageService } from './updated-message.service';

@Injectable(
//   {
//   providedIn: 'root', useClass:UpdatedMessageService
// }
)
export class MessageService {

  
  constructor() { }

  sayHiFromChild(childCponentName: string) {
    return "Hii, This from MessageService "+childCponentName;
  }

}
