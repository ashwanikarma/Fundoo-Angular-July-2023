import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/sevices/user/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  forgotForm! : FormGroup
  submitted = false;
  constructor(private fb : FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email:['',[Validators.required, Validators.email]]
    })
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

  onSubmit(){
    this.submitted = true;
    if (this.forgotForm.valid) {
      let requestdata = {
        Email : this.forgotForm.value.email
      }
      console.log(requestdata);
      this.userservice.forgetPassword(requestdata).subscribe((response:any) =>{
        console.log(response);
      });
    }
  }

}
