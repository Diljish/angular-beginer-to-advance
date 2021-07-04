import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  messageFromChild2?: string;
  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageFromChild2 = this.messageService.sayHiFromChild('child2');
  }

}
