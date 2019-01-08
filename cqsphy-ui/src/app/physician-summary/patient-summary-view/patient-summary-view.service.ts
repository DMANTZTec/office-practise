import { BreadcrumbService } from './../../bread-crumb/bread-crumb.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SummaryData, KPICategoryData, KPIDetailsData } from './../../data/model';

@Injectable()
export class PatientSummaryViewService {
  private _patientSummaryCache$: Observable<SummaryData[]>;
  private _entityCensusCache$: Observable<any>;

  private _svcPatientSummaryDataParam: PatientSummarySvcParams;
  private _svcEntityCensusParam: PatientSummarySvcParams;

  constructor(private _http: HttpClient,
    private _breadcrumbSvc: BreadcrumbService) { }

  getPatientSummaryData(inputParams: PatientSummarySvcParams) {
    if (!this._patientSummaryCache$ || this._breadcrumbSvc.isParamChanged(this._svcPatientSummaryDataParam, inputParams)) {
      this._patientSummaryCache$ = this.requestPatientSummaryData(inputParams).pipe();
    }
    return this._patientSummaryCache$;
  }

  getEntityCensus(inputParams: PatientSummarySvcParams) {
    if (!this._entityCensusCache$ || this._breadcrumbSvc.isParamChanged(this._svcEntityCensusParam, inputParams)) {
      this._entityCensusCache$ = this.requestEntityCensus(inputParams).pipe();
    }
    return this._entityCensusCache$;
  }

  private requestPatientSummaryData(inputParams: PatientSummarySvcParams) {
    this._svcPatientSummaryDataParam = inputParams;

    const httpBody = {
      'entityId': this._svcPatientSummaryDataParam.entityId,
      'entityLvl': this._svcPatientSummaryDataParam.entityLvl,
      'modality': this._svcPatientSummaryDataParam.modality,
      'rptDt': this._svcPatientSummaryDataParam.rptDt
    };

    // const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    console.log(`getting summary data for entity: ${this._svcPatientSummaryDataParam.entityId}
    level: ${this._svcPatientSummaryDataParam.entityLvl}
    modality: ${this._svcPatientSummaryDataParam.modality}
    report date: ${this._svcPatientSummaryDataParam.rptDt}`);

    return this._http.post<SummaryData[]>(environment.summaryApiUrl, httpBody, httpOptions).pipe();
  }

  private requestEntityCensus(inputParams: PatientSummarySvcParams) {
    this._svcEntityCensusParam = inputParams;


    const httpBody = {
      'entityId': this._svcEntityCensusParam.entityId,
      'modality': this._svcEntityCensusParam.modality,
      'rptDt': this._svcEntityCensusParam.rptDt
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    console.log(`getting clinic census for entity: ${this._svcEntityCensusParam.entityId}
    level: ${this._svcEntityCensusParam.entityLvl}
    modality: ${this._svcEntityCensusParam.modality}
    report date: ${this._svcEntityCensusParam.rptDt}`);

    return this._http.post<any>(environment.entityCensusApiUrl, httpBody, httpOptions).pipe();
  }
}

export class PatientSummarySvcParams {
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;
}
