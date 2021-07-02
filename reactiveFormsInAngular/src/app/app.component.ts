import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login Form (Reactive Form In Angular Sample)';
  loginForm:FormGroup;
  constructor(){
    
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null, Validators.required)

    })
  }
  ngOnInit(){
    
  }
  loginUser(){
    console.log(this.loginForm.status);
    console.log(this.loginForm.value);
  }
}
