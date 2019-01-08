import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor(private _http: HttpClient) { }


  getDataAsOfDate() {
    return '10/31/2018';
    // return this._http.get(environment.dataAsOfDateApiUrl, { responseType:  'text' });
  }

}
