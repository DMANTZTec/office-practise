import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class UserInfoService {

  constructor(private _http: HttpClient) { }

  getUserInfo(userId) {
    return this._http.get(environment.userAccessInfoUrl + userId).toPromise();
  }
}
