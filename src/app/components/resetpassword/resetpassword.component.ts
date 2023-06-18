import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/sevices/user/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetForm!  : FormGroup;
  submitted = false;
  token: any;
  constructor(private fb : FormBuilder,private userservice:UserService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group ({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
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
    if (this.resetForm.valid) {
      let requestdata = {
        password: this.resetForm.value.password,
        confirmPassword: this.resetForm.value.confirmPassword
      }
      console.log(requestdata);
      this.userservice.resetPassword(requestdata,this.token).subscribe((response:any)=> {
        console.log(response);
      });
    }
  }

}
