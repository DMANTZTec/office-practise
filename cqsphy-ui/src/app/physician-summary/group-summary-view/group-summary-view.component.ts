import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-group-summary-view',
  templateUrl: './group-summary-view.component.html',
  styleUrls: ['./group-summary-view.component.css']
})
export class GroupSummaryViewComponent implements OnInit {
  public grpPracId;
  public entityLvl;
  public modality;
  public rptDt;
  public debugUser;
  sort = 3; //DEFAULTING THE OUTPUT TO ASCENDING ORDER
  constructor(public breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.grpPracId = this.breadCrumbService.get("pracGrpId");
    this.entityLvl = this.breadCrumbService.get('pracGrpLevel');
    this.modality = this.breadCrumbService.get('modality');
    this.rptDt = this.breadCrumbService.get('dataAsOfDate');
    //   console.log('from GroupSummaryViewComponent in Physician Summary')
    //   console.log(this.grpPracId + ' ' + this.entityLvl + ' ' +  this.modality + ' ' + this.rptDt);
  }

}
