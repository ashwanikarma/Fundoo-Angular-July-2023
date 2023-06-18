import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/sevices/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;  

  constructor(private fb: FormBuilder, private userservice:UserService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginform.valid){
     console.log(this.loginform.value);
     this.loginsumbit();
    }
    else{
        this.validateAllFormFields(this.loginform);
        alert("Your form is invalid");      
    }
  }

  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control);
      }
    })
  }
  loginsumbit(){
    let requestdata = {
      email:this.loginform.value.email,
      password:this.loginform.value.password
    }
    // if (requestdata.email.value!=null && requestdata.password.value!=null) {
      this.userservice.Login(requestdata).subscribe((response:any)=>
      {
        console.log(response.message)
      })
  
  }
}
