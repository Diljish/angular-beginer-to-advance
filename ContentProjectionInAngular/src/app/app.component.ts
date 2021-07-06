import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Content Projection In Angular';
  rememberMe:boolean = false;
  loginUser(user: User){
    console.log('Login',user, this.rememberMe);
  }
  registerUser(user: User){
    console.log('Register',user);
  }
  rememberUser(remeberMe:any){
    this.rememberMe = remeberMe; 

  }
}
