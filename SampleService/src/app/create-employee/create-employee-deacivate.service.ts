import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeDeacivateService implements CanDeactivate<CreateEmployeeComponent>{
test:boolean;
  constructor() { }
  canDeactivate(component: CreateEmployeeComponent): boolean {
    this.test= window.confirm("discard the changes");
    if(this.test==true){
      return true;
    }
    else{
      return false;
    }
    
  
  }

}
