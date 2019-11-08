import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent implements OnInit{

  title = 'DeleteRecord';
  empID;
  formdata;
  constructor(public del: EmployeeService ) {

  }
ngOnInit() {
  this.formdata= new FormGroup ({
    empID: new FormControl('')
        
});
  

}
onDelete(data) {
  this.empID=data.empID;
  this.del.delEmployee(this.empID).subscribe(x => {
    
    console.log(x);
  });
  
}
}