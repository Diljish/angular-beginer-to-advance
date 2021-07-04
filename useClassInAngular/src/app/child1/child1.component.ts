import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  messageInChild1?: string;
  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageInChild1 = this.messageService.sayHiFromChild('child1');
  }

}
