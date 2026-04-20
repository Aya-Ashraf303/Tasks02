import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-reactive-form',
  imports: [FluidModule, InputTextModule, FloatLabel, ButtonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  myForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3) , Validators.maxLength(20)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null ,[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$!%*?&])(?=.*\d)[A-Za-z\d@$#!%*?&]{6,}$/)]),
    rePassword: new FormControl(null ,[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$!%*?&])(?=.*\d)[A-Za-z\d@$#!%*?&]{6,}$/)]),
    phone: new FormControl(null ,[Validators.required,Validators.pattern(/^01[0-2,5][0-9]{8}$/)]),
  },this.rePasswordValidation);
  SendData()
  {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }
  rePasswordValidation(regForm : any)
  {
    if(regForm.get('password')?.value===regForm.get('rePassword')?.value)
    {
      return null;
    }else
    {
      return {
        'notMatched' : true
      }
    }
  }
}
