import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface records{
  obj:Object;
}
@Injectable({
  providedIn: 'root'
})

export class GetnameService {

  constructor(private http:HttpClient) { }
  getName(){
    return this.http.get<records>('./assets/data/name.json').pipe();
    //subscribe(data=>{
     // console.log("response",data);
  //  })
  }
}
