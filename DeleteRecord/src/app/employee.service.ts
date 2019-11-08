import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class EmployeeService {
  baseUrl: string = "http://localhost:8080/deleteEmp";
  
  constructor(private _http:HttpClient) { }

  delEmployee(id: number): Observable<void> {
       
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
    return this._http.delete<void>(`${this.baseUrl}/${id}`);
}
}
