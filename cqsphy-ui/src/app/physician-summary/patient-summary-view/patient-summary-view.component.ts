import { SentenceBuilderNotifyService } from 'bi-component-library';
import { Subscription } from 'rxjs/rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { SummaryData } from './../../data/model';
import { PatientSummaryViewService, PatientSummarySvcParams } from './patient-summary-view.service';
import { debug } from 'util';
import * as $ from 'jquery';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-patient-summary-view',
  templateUrl: './patient-summary-view.component.html',
  styleUrls: ['./patient-summary-view.component.css']
})
export class PatientSummaryViewComponent implements OnInit, OnDestroy {
  patientSummaryData: SummaryData[];
  currentMonthPatientSummaryData: SummaryData;
  sbConfig: any;
  showView = 1; //  0 - singleList; 1 - category;
  private _entityId;
  private _entityLvl;
  modality: string;
  sort: number;
  private _rptDt;
  private _subscription: Subscription;
  updateChildren: boolean;
  entityCensus: string;

  constructor(
    private _patientSummaryViewSvc: PatientSummaryViewService,
    public breadCrumbService: BreadcrumbService,
    private _sentenceBuilderNotifyService: SentenceBuilderNotifyService) {

  }

  ngOnInit() {

    if (this.breadCrumbService.check('modality')) {
      this.sbConfig = {
        applicationName: 'PHYCQS', viewName: 'SUMMARY_PHYSICIAN',
        initialOption: { sboS2: this.breadCrumbService.get('modality') + ' patients' }
      };
    } else {
      this.sbConfig = { applicationName: 'PHYCQS', viewName: 'SUMMARY_PHYSICIAN' };
    }

    this._entityId = this.breadCrumbService.get('entityId');
    this._entityLvl = this.breadCrumbService.get('hierarchylevel');
    this.modality = this.breadCrumbService.get('modality');
    this._rptDt = this.breadCrumbService.get('dataAsOfDate');
    this.getDatafromSrv();
    this._subscription = this._sentenceBuilderNotifyService.notifyObservable.subscribe(
      (selectedSentenceBuilderOptions) => {
        if (this.modality !== selectedSentenceBuilderOptions.modality.id) {
          this.modality = selectedSentenceBuilderOptions.modality.id;
          this.breadCrumbService.set('modality', this.modality);
          this.getDatafromSrv();
        }
        if (this.sort !== selectedSentenceBuilderOptions.sort.id) {
          this.sort = selectedSentenceBuilderOptions.sort.id;
        }
        if (this.showView !== selectedSentenceBuilderOptions.display.id) {
          this.showView = selectedSentenceBuilderOptions.display.id;
        }

      });
  }

  getDatafromSrv() {
    const inputParams = new PatientSummarySvcParams();
    inputParams.entityId = this._entityId;
    inputParams.entityLvl = this._entityLvl;
    inputParams.modality = this.modality;
    inputParams.rptDt = this._rptDt;

    this._patientSummaryViewSvc.getEntityCensus(inputParams).subscribe(
      entityCensus => {
        if (entityCensus) {
          // console.log(`Entity Census: ${entityCensus}`);
          this.entityCensus = entityCensus;
        }
      },
      error => console.error(error)
    );
    this._patientSummaryViewSvc.getPatientSummaryData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.patientSummaryData = <SummaryData[]>data;
        }
        this.updateChildren = this.updateChildren ? false : true;
      },
      error => console.error(error)
    );


  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
