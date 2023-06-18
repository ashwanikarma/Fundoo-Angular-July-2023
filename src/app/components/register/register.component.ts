import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/sevices/user/user.service';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(private fb : FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    })
  }
  onSignup(){
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.RegisterSumbit();

    }
    else{
      this.validateAllFormFields(this.signupForm)
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
  RegisterSumbit(){
    let requestdata = {
      firstName:this.signupForm.value.firstName,
      lastName:this.signupForm.value.lastName,
      email:this.signupForm.value.email,
      password:this.signupForm.value.password
    }
    this.userservice.Register(requestdata).subscribe((response:any)=>
    {
      console.log(response.message)
    })
  }
}
