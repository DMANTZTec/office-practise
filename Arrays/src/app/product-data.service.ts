import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './data';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  survey: FormGroup;
  formData: { productName:'',productDesc:'',searchTag:'',skus:[ {imageUrl:'', price:0, productSkuCd:''}], pcds:[{catalogId:0,primaryFlg:''}] }
  constructor(private http : HttpClient) { }

  saveProduct(formData: Product){
    console.log(formData);
    
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:8091',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    console.log("before service");
    return this.http.post<Product>('http://localhost:8091/addproduct',formData,httpOptions).pipe();
    
  }

}
