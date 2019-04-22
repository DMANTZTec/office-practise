import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  constructor(private http:HttpClient) { }
  getUserDetails(username:String,password:String){
    //post these details to server return user info if correct
    return this.http.post('http://localhost:8080/swagger-ui.html',{username,password}).subscribe(data=>{console.log(data)})
  }
}
