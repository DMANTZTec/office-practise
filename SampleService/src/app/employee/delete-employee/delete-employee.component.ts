import { Component, OnInit } from '@angular/core';
import { GetnameService } from 'src/app/getname.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
 id:Number; 

 response={};
  constructor(private getnameService:GetnameService) { }

deleteEmployee(id:Number){
  //this.getnameService.deleteEmployee(+this.route.paramMap.get('id'));
  this.getnameService.deleteEmployee(4).subscribe((data)=>{this.response=data;console.log(this.response)})
}
  ngOnInit() {
    this.deleteEmployee(this.id);
    
  }

}
