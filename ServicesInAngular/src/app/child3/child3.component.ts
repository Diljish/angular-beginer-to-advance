import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message?: string;
  constructor(private logService : LogService) { }

  ngOnInit(): void {
  }
  callService():void{
      this.message = this.logService.sayHello('child3');
  }

}
