import { Component, OnInit } from '@angular/core';
import { UpdatedMessageService } from '../updated-message.service';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  messageFromChild3?:string;
  constructor(private updatedMessageService : UpdatedMessageService) { }

  ngOnInit(): void {
    this.messageFromChild3 = this.updatedMessageService.sayHiFromChild('child3');
  }

}
