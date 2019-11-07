import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './model/Employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  formData: {id:'' ,name:'' ,dept:''}
  constructor(private _http: HttpClient) { }
  public insertData(formData : Employee) :Observable<any> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Methods': "DELETE,POST,GET,OPTIONS",
        'Access-Control-Allow-Headers': 'Content-Type :application/json',
        'Authorization': 'my-auth-token'

      })
    };
    return this._http.post<Employee>('http://localhost:8080/insertEmp',formData,httpOptions).pipe();

  }
}
