import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

const template = `
<h1>Greetings</h1>
<h1>{{greetingMessage}}</h1>
<input type="text" [(ngModel)] = "message">
<button (click)='greet()'>Click Here</button>

`
@Component({
  selector: 'app-greet',
  template: template
})
export class GreetComponent implements OnInit {

  @Input() greetingMessage?:string;
  message: string="input data";
  @Output() sendMessageEvent= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  greet():void {
    this.sendMessageEvent.emit("Hello From Greet");
  }

}

@NgModule(
  {
    declarations:[GreetComponent],
    imports: [FormsModule]
  }
)
class importModulesForGreetComponent {

}
