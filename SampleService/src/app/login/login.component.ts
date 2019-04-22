import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService:LoginService,private _authService:AuthService) { }

  ngOnInit() {
  }
loginUser(event){
  event.preventDefault();
  const target=event.target;
  const username=target.querySelector('#username').value;
  const password=target.querySelector('#password').value;
  console.log(event);
  console.log(username,password);
  this._loginService.getUserDetails(username,password);
  this._authService.checkingLogin(username,password);

}
}
