import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { GetnameService } from 'src/app/getname.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  private updateRes={};
  constructor(private getnameService:GetnameService) { }
  updateEmployee(){
    var emp=new Employee(4,"mounika","9789892753");
    this.getnameService.updateEmployee(emp).subscribe((data)=>{this.updateRes=data;console.log(this.updateRes)});
   }
  ngOnInit() {
    this.updateEmployee();
  }

}
