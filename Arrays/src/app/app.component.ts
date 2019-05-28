import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from './data';
import { ProductDataService } from './product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  survey: FormGroup;
  formData: { productName:'',productDesc:'',searchTag:'',sku:[ {imageUrl:'', price:0, productSkuCd:''}],productCatalogDir:[{catalogId:0,primaryFlg:''}] }

  constructor(private productDataService: ProductDataService) {

  }

  ngOnInit() {


    this.survey = new FormGroup({
      productName: new FormControl(''),
      productDesc: new FormControl(''),
      searchTag: new FormControl(''),
      sku: new FormArray([
        this.initSku(),
      ]),
      productCatalogDir: new FormArray([
        this.initProductCatalogDir(),
      ]),
    });
  }
  initProductCatalogDir() {
    return new FormGroup({
      catalogId:new FormControl(''),
      primaryFlg:new FormControl(''),
    })
  }

  initSku() {
    return new FormGroup({
      imageUrl: new FormControl(''),
      price: new FormControl(''),
      productSkuCd: new FormControl(''),
      options: new FormArray([
        this.initOptions()
        ])
    });
  }
  initOptions() {
    return new FormGroup({
      optionName: new FormControl(''),
      optionValue: new FormControl('',Validators.required),
      
    });
  }

  addProduct(){
    
    //const control =this.survey.get('survey');
  }

  addSku(survey) {
    this.productDataService.saveProduct(this.survey.value).subscribe(
      data =>{
        console.log(data);
      }
    )
      survey.push(this.initSku);
    
    //const control = <FormArray>this.survey.get('skus');
    //control.push(this.initSku());
  }
  addProductCatalogDir(survey){
    //const control =<FormArray>this.survey.get('pcds');
    this.productDataService.saveProduct(this.survey.value).subscribe(
      data =>{
        console.log(data);
      }
    )
      survey.push(this.initProductCatalogDir);
  }

  addOptions(j) {
    console.log(j);
    //const control = <FormArray>this.survey.get('skus').get('options');
   // console.log(control);
   this.productDataService.saveProduct(this.survey.value).subscribe(
    data =>{
      console.log(data);
    }
  )
    j.push(this.initOptions());
    
  }

  add() {
    //console.log(k);
    // const control = <FormArray>this.survey.get('skus').get('options');
    // control.push(this.initOptions());
    this.productDataService.saveProduct(this.survey.value).subscribe(
      data =>{
        console.log(data);
      }
    )

  }

  getSkus(form) {
    //console.log(form.get('sections').controls);
    return form.controls.sku.controls;
  }
  getOptions(form) {
   //console.log(form.controls.questions.controls);
    return form.controls.options.controls;
  }
  getproductCatalogDirs(form){
    //const control =<FormArray>this.survey.get('pcds');
    return form.controls.productCatalogDir.controls;
  }
  

  
  onSubmit(survey){
     this.productDataService.saveProduct(this.survey.value).subscribe(
       res =>{
         console.log(res)
         console.log('after Service');
       }
     ) 
  
  }
    
  }


