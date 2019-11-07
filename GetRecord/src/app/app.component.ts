import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GetRecord';
  employees:any=[];
  constructor(private es:EmployeeService) {}
  ngOnInit() {
   this.es.getAllEmps().subscribe(abcd =>{ this.employees = abcd;console.log(this.employees)});
}
}