import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';

interface records{
  obj:Object;
}
@Injectable({
  providedIn: 'root'
})

export class GetnameService {
  private employees;

  constructor(private http:HttpClient) { }
  getName(){
    return this.http.get<Employee[]>('./assets/data/name.json').pipe();
    //subscribe(data=>{
     // console.log("response",data);
  //  })
  }
 getEmployeeById(id:number){
 // return this.http.get<Employee[]>('./assets/data/name.json').pipe();
 if(id==1){
   return true;
 }
 else if(id==2){
   return true;
 }
 else
 return false;

}
}
