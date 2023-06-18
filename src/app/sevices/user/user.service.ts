import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  Login(requestdata:any){
    let header = {Headers:new HttpHeaders({
      'Content-Type':'application/json'
    })}
    return this.http.PostService('User/Login',requestdata,false,header)
  }
  Register(requestdata:any){
    let header = {Headers:new HttpHeaders({
      'Content-Type':'application/json'
    })}
    return this.http.PostService('User/Register',requestdata,false,header)
  }
  forgetPassword(requestdata:any){
    let header = {Headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.PostService('User/ForgetPassword/'+requestdata.Email,{},true,header)
  }
  resetPassword(requestdata:any,token:any){
    console.log(token)
    let header = {Headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    })

    
    }
    console.log(token)
    return this.http.PutService('User/ResetPassword',requestdata,true,header)
  }
}
