import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-patient-details-view',
  templateUrl: './patient-details-view.component.html',
  styleUrls: ['./patient-details-view.component.css']
})


export class PatientDetailsViewComponent implements OnInit {
  screenName: string;
  sbConfig: any;
  constructor(public breadCrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.screenName = 'Physician';
    this.sbConfig = {
      applicationName: 'PHYCQS', viewName: 'PT_DETAILS_PHYSICIAN',
      initialOption: { sboS3: this.breadCrumbService.get('modality') + ' patients' }
    };
  }
}
