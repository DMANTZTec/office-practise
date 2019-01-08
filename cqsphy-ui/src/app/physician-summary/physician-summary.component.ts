import { Component, OnInit } from '@angular/core';
import { PhysicianSummaryService } from './physician-summary.service';
import { BreadcrumbService } from '../bread-crumb/bread-crumb.service';
@Component({
  selector: 'app-physician-summary',
  templateUrl: './physician-summary.component.html',
  styleUrls: ['./physician-summary.component.css']
})
export class PhysicianSummaryComponent implements OnInit {

  public _dataAsOf: string;

  // private _entityid : String;
  // private _modality : String;
  // private _entityLvl: String;

  constructor(private physicianSummaryService: PhysicianSummaryService, public breadCrumbService: BreadcrumbService
  ) { }

  ngOnInit() {

    this._dataAsOf = this.breadCrumbService.get('dataAsOfDate');

    // this._entityid = this.breadCrumbService.get('entityId');
    // this._modality = this.breadCrumbService.get('modality');
    // this._entityLvl = this.breadCrumbService.get('hierarchylevel');
    //console.log('>>>---calling ngOnInit--->');
    //this.getData();
  }

  // getData(){
  //   console.log('>>>---invoking API--->');
  //   this.physicianSummaryService.getCategorySummaryData(this._entityid,this._modality,this._entityLvl).subscribe(result => {
  //     console.log(`${result}`);
  //     if (result && result.length > 0) {
  //       console.log(" Rows :"+result.length)
  //     }else{
  //       console.log('No Rows Returned.')
  //     }
  //   });
  // }

}
