import { Component, OnInit } from '@angular/core';
//import { GetnameService } from '../getname.service';
import { Employee } from '../Employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
private record:Employee[]=[];
  constructor(private _router:Router,private _route:ActivatedRoute) {
    this.record=this._route.snapshot.data['employeeList'];
   }

  ngOnInit() {
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
