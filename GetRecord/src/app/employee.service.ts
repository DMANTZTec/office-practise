import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';

@Injectable()
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  public getAllEmps() {
   return this._http.get<Employee[]>('http://localhost:8080/emplist').pipe();
  }
}
