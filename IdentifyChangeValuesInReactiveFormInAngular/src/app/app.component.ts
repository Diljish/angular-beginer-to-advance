import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

function ageRangeValidator(min:number, max:number):ValidatorFn{
  return (control: AbstractControl):{[key:string]: boolean} | null =>{
    if(control.value  !== undefined && isNaN(control.value) || control.value < min || control.value > max ){
      return {'ageRange': true};
  
    }
  return null;

}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IdentifyChangeValuesInReactiveFormInAngular';
  loginForm:FormGroup;
  age?:number;
  min:number =18;
  max:number =45
  constructor(){
    
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null, Validators.required),
      age: new FormControl(null,[ageRangeValidator(this.min,this.max)]),
      phoneNumber: new FormControl(null),
      notification : new FormControl('email')

    });
    this.reactiveFormControlValueChange();
  }
  ngOnInit(){
    
  }
  loginUser(){
    console.log(this.loginForm.status);
    console.log(this.loginForm.value);
  }
  reactiveFormControlValueChange(){
    const phoneControl = this.loginForm.get('phoneNumber');
    this.loginForm.get('notification')?.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
        if(value=='phone') {
          phoneControl?.setValidators([Validators.required]);
        }else {
          phoneControl?.clearValidators();
        }
        phoneControl?.updateValueAndValidity();
      }
      
    )

  }
}
