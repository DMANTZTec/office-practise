import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  screenName: string;
  sbConfig: any;
  constructor(public breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
    debugger;
    this.screenName = 'Group';
    this.sbConfig = {
      applicationName: 'PHYCQS', viewName: 'PT_DETAILS_GROUP',
      // initialOption: { sboS4: this.breadCrumbService.get('modality') + ' patients' }
      initialOption: { sboS4: 'IHD' + ' patients' }
    };
  }

}
