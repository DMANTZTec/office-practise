import { Component,OnInit } from '@angular/core';
import { GetnameService } from './getname.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'SampleService';
   datalist:any[]=[];
  constructor(private getnameService:GetnameService){}
record={};
  ngOnInit(){
      this.record=this.getnameService.getName();
      this.getNames();
    }
    getNames(){
     this.record= this.getnameService.getName().subscribe( function(data){console.log(data)})
    }
  
  
}
