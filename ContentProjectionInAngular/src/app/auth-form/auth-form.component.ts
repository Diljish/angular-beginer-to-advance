import { AfterContentInit, Component, ContentChild, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { User } from '../user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit,AfterContentInit {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChild(AuthRememberComponent) remember?: AuthRememberComponent; 
  showMessages: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit():void{
console.log(this.remember);
this.remember?.checked.subscribe((checked :boolean)=>{
this.showMessages= checked;
});
  }
  onSubmit(value: User):void {
    this.submitted.emit(value);
  }

}
