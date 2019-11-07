import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InsertRecord';
  employee:FormGroup;
  employees: any = [];

  constructor(private iService:EmployeeService){}
  ngOnInit() {
  this.employee=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    dept:new FormControl('') 
  }); 
  }
post() {
   this.iService.insertData(this.employee.value).subscribe(data =>{
    this.employees = data;
    console.log(this.employees);
  })
}
}
