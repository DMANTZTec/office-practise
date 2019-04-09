import { Component,OnInit } from '@angular/core';
import { GetnameService } from './getname.service';
import { Employee } from './Employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'SampleService';
  record:Employee[];
  constructor(private getnameService:GetnameService){}
  ngOnInit(){
      //this.getnameService.getName().subscribe(
      //  data=>{
      //    this.record=data;
        //  console.log(this.record);
     // }
     // );
      //this.getNames();
    }
  
  
  
}
