import { PatientSummaryViewService } from './../physician-summary/patient-summary-view/patient-summary-view.service';
import { hierarchy } from 'd3';
import { Component, OnInit } from '@angular/core';
import { SummaryData } from '../data/model';
import { DoctorsCornerService, DoctorsCornerSvcParams } from './doctors-corner.service';
import { BreadcrumbService } from '../bread-crumb/bread-crumb.service';
import { SentenceBuilderNotifyService } from 'bi-component-library';
import { Subject, Subscription } from 'rxjs/rx';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

import { debug } from 'util';
import * as $ from 'jquery';

@Component({
  selector: 'app-doctors-corner',
  templateUrl: './doctors-corner.component.html',
  styleUrls: ['./doctors-corner.component.css']
})
export class DoctorsCornerComponent implements OnInit {

  doctorsSummaryData: SummaryData[];
  currentMonthPatientSummaryData: SummaryData;
  sbConfig: any;
  // showView = 1; //  1 - category;  2 - singleList

  private _entityId;
  private _entityLvl;
  modality: string;
  rptDt: string;
  updateChildren: boolean;
  entityCensus: string;


  constructor(private _doctorsCornerSvc: DoctorsCornerService,
    public _breadCrumbService: BreadcrumbService,
    private _cookieService: CookieService,
  private _patientSummaryViewSvc: PatientSummaryViewService) {
  }

  ngOnInit() {
    this.rptDt = this._breadCrumbService.get('dataAsOfDate');
    this._entityId = this.getUrlParameter('entityid');
    this._entityLvl = this.getUrlParameter('hierarchylevel');
    this.modality = this.getUrlParameter('modality');

    if (!this.modality) {
      this.modality = this._breadCrumbService.get('modality');
    } else {
      this._breadCrumbService.set('modality', this.modality);
    }

    if (this._entityLvl && this._entityId) {
      if (this._entityLvl === '0') {
        this._breadCrumbService.set('entityId', this._entityId);
        this._breadCrumbService.set('hierarchylevel', this._entityLvl);
      }
      if (this._entityLvl === '1') {
        this._breadCrumbService.set('pracGrpId', this._entityId);
        this._breadCrumbService.set('pracGrpLevel', this._entityLvl);
      }
    }

    this.getDatafromSrv();
  }

  getDatafromSrv() {
    const inputParams = new DoctorsCornerSvcParams();
    inputParams.entityId = this._entityId;
    inputParams.entityLvl = this._entityLvl;
    inputParams.modality = this.modality;
    inputParams.rptDt = this.rptDt;

    this._patientSummaryViewSvc.getEntityCensus(inputParams).subscribe(
      entityCensus => {
        if (entityCensus) {
          // console.log(`Entity Census: ${entityCensus}`);
          this.entityCensus = entityCensus;
        }
      },
      error => console.error(error)
    );

    this._doctorsCornerSvc.getDoctorsCornerData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          // console.log('got data', data);
          this.doctorsSummaryData = <SummaryData[]>data;
          this.updateChildren = this.updateChildren ? false : true;
        }
      },
      error => console.error(error)
    );

  }
  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.href);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

}
