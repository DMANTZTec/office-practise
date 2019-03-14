import { Component, OnInit } from '@angular/core';
import { DropdownsService } from './dropdowns.service';
import { Hero,EarRings, NewArrivals } from '../../data/hero';
//import { EarRings } from '../../data/earrings';


@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  private rings;
  RingsList: Hero[] = [];
  EarRingsList: EarRings[] =[];
  keys:String[];
  v1:boolean;
  isHovering=false;
  private dropdownsService;
  NewArrivalsList: Hero[];
  GoldCoins: Hero[];
  constructor(private _dropdownsService:DropdownsService) { }

  ngOnInit() {
    
    
}


getRings(){
  //var dropdown=(<HTMLCollectionOf<Element>>document.getElementsByClassName('list-inline category-section')).style.display = 'block';
  //(<HTMLElement>document.querySelector('list-inline category-section')).style.display = 'none';
  document.getElementById("rings").style.display='block';

  this._dropdownsService.getRings()
  .subscribe(
    data => {
      this.RingsList = <Hero[]>data;
      console.log( 'this.RingsList', this.RingsList);
     

    },
    error => console.error(error)
  );



}
  
 

  //method getEarrings

  getEarRings()
  {
    document.getElementById("earrings").style.display='block';
     this._dropdownsService.getEarrings()
              .subscribe(
                data=>{
                this.EarRingsList=<EarRings[]>data;
                console.log('Earrings list is',this.EarRingsList);
              },
             error=> console.error(error)
              
              );

  
  }

  //method for getNewArrivals

  getNewArrivals(){
    document.getElementById("newarrivals").style.display='block';
    this._dropdownsService.getNewArrivals()
     .subscribe(
       data=>{
         this.NewArrivalsList=data;
         console.log('new arrivals list is',this.NewArrivalsList);
       },
       error=>console.error(error)
       
     )
  }
  getGoldCoins(){
    this._dropdownsService.getGoldCoins()
     .subscribe(
       data=>{
         this.GoldCoins=<Hero[]>data;
         console.log('gold cois array is',this.GoldCoins);
       },
      error=> console.error(error)
       
     )
  }

  mouseout()
  {
    document.getElementById("rings").style.display='none';
  }
  setMouseOut(){
    document.getElementById("earrings").style.display='none';
  }
  setMouseOut2(){
    document.getElementById("newarrivals").style.display='none';
  }
  
  
  
  }




