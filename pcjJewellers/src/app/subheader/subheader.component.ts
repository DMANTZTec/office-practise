import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
 loginLinks=[];
  constructor() { 
    this.getLoginLinks();
  }

  ngOnInit() {
  }
getLoginLinks(){
  {
    this.loginLinks = [
      { label: 'login', link: 'login' },
      { label: 'register', link: 'register' },
      { label: 'favorites', link: 'favorites'},
      { label: 'cart', link: 'cart'},
       ];
  }
  
}
}
