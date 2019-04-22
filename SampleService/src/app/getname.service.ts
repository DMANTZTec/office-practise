import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';


interface records{
  obj:Object;
}
@Injectable({
  providedIn: 'root'
})

export class GetnameService {
  private employees;
   
  baseUrl='http://localhost:8080/EcommerceApp/deleteEmployee';
 // id: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "events"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; };

  constructor(private http:HttpClient) { }
  getName(){
    return this.http.get<Employee[]>('./assets/data/name.json').pipe();
    //subscribe(data=>{
     // console.log("response",data);
  //  })
  }

  saveEmployee(emp:Employee):Observable<any>
  {
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text',              
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
        //'Access-Control-Allow-Headers':'application/json'
        
      })
    };
    const headers=new HttpHeaders().set('Content-Type','application/x-www-formurlencoded');
   
   return this.http.post<any>('http://localhost:8080/EcommerceApp/saveEmployee',emp,httpOptions);
  }

  updateEmployee(_emp:Employee):Observable<any>{
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text',              
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
        //'Access-Control-Allow-Headers':'application/json'
        
      })
    };
    const headers=new HttpHeaders().set('Content-Type','application/x-www-formurlencoded');

    return this.http.put<any>('http://localhost:8080/EcommerceApp/updateEmployee/4',_emp,httpOptions);
  }
  deleteEmployee(empId:Number):Observable<any>{
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text',              
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
        //'Access-Control-Allow-Headers':'application/json'
        
      })
    };
    const headers=new HttpHeaders().set('Content-Type','application/x-www-formurlencoded');
    return this.http.delete<any>('http://localhost:8080/EcommerceApp/deleteMapping/2',httpOptions);
  }

 getEmployeeById(id:number)
 {
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
