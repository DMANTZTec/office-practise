import { Component, OnInit } from '@angular/core';
//import { GetnameService } from '../getname.service';
import { Employee } from '../Employee';
import { Router, ActivatedRoute } from '@angular/router';
import { GetnameService } from '../getname.service';
import { EmployeeResponse } from '../EmployeeResponse';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
private record:Employee[]=[];
private response={};
private updateRes={};
  constructor(private getnameService:GetnameService,private _router:Router,private _route:ActivatedRoute) {
    this.record=this._route.snapshot.data['employeeList'];
    console.log(this.record)
   }
   saveEmployee(){
    var emp=new Employee(4,"mounika","9789892753");
    this.getnameService.saveEmployee(emp).subscribe((data)=>{this.response=data;console.log(this.response)});
   }
   updateEmployee(){
    var emp=new Employee(4,"mounika","9789892753");
    this.getnameService.updateEmployee(emp).subscribe((data)=>{this.updateRes=data;console.log(this.updateRes)});
   }
  ngOnInit() {
    var emp=new Employee(4,"mounika","9789892753");
    console.log(emp);
   this.saveEmployee();
    this.updateEmployee();
    //this.getnameService.saveEmployee(emp).subscribe((data)=>{this.response=data;console.log(this.response)});
   // this.getnameService.updateEmployee(emp).subscribe((data)=>{this.response=data;console.log(this.response)});
    // this.getnameService.getName().subscribe(data=>{this.record=data;console.log(this.record)});
    //this.getnameService.getEmployeeById(1).subscribe(data=>
     // {
       // this.record=data;
        //console.log(this.record);
        //for(var i in this.record){
         // console.log(i.id);

        //}
     // });
     
  }

}
