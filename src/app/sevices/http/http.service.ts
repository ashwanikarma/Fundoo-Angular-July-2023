import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseurl
  constructor(private http:HttpClient) {
    
   }
   PostService(url:string, requestdata:any, token:boolean, httpoptions: any={}){
    return this.http.post(this.baseurl + url,requestdata,token && httpoptions);
   }
   PutService(url:string, requestdata:any,token:boolean, httpoptions: any={}){
   return this.http.put(this.baseurl + url,requestdata,token && httpoptions);
   }

}
