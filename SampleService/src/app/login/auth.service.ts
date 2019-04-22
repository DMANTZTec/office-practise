import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
userName:String;
password:String;

  constructor(private _http:HttpClient) { }

checkingLogin(userName,password){
this.userName=userName;
this.password=password;
console.log("checking login method executed"+userName);
}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean
    {
     
      if((this.userName=="user")&&(this.password=="8164e6c0-03eb-4786-8a24-33010065a0ec")){
       
       //  return this._http.post("http://localhost:8080/swagger-ui.html",{this.username,this.password}).subscribe(data=>{console.log(data)}));
       return true;
      }
  }
  
}
