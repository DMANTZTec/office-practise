import { BreadcrumbService } from './../../bread-crumb/bread-crumb.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KPICategoryData, KPIDetailsData } from '../../data/model';
import { environment } from '../../../environments/environment';

@Injectable()
export class KpiCategoryService {
  private _kpiCategoryCache$: Observable<KPICategoryData[]>;
  private _kpiDetailsCache$: Observable<KPIDetailsData[]>;
  private _svcKPICategoryDataParams: KpiCategorySvcParams;
  private _svcKPIDetailsDataParams: KpiCategorySvcParams;

  constructor(private _http: HttpClient,
    private _breadcrumbSvc: BreadcrumbService) { }

  getKPICategoryData(inputParams: KpiCategorySvcParams) {
    if (!this._kpiCategoryCache$ || this._breadcrumbSvc.isParamChanged(this._svcKPICategoryDataParams, inputParams)) {
      this._kpiCategoryCache$ = this.requestKPICategoryData(inputParams).pipe();
    }
    return this._kpiCategoryCache$;
  }

  getKPIDetailsData(inputParams: KpiCategorySvcParams) {
    if (!this._kpiDetailsCache$ || this._breadcrumbSvc.isParamChanged(this._svcKPIDetailsDataParams, inputParams)) {
      this._kpiDetailsCache$ = this.requestKPIDetailsData(inputParams).pipe();
    }
    return this._kpiDetailsCache$;
  }

  private requestKPICategoryData(inputParams: KpiCategorySvcParams) {
    this._svcKPICategoryDataParams = inputParams;
    const httpBody = {
      'entityId': this._svcKPICategoryDataParams.entityId,
      'entityLvl': this._svcKPICategoryDataParams.entityLvl,
      'modality': this._svcKPICategoryDataParams.modality,
      'rptDt': this._svcKPICategoryDataParams.rptDt
    };
    // const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    console.log(`getting Category data for entity: ${this._svcKPICategoryDataParams.entityId}
    level: ${this._svcKPICategoryDataParams.entityLvl}
    modality: ${this._svcKPICategoryDataParams.modality}
    report date: ${this._svcKPICategoryDataParams.rptDt}`);

    //  return this._http.get<KPICategoryData[]>(environment.kPICategoryApiUrl).pipe();
    return this._http.post<any>(environment.kPICategoryApiUrl, httpBody, httpOptions).pipe();

  }

  private requestKPIDetailsData(inputParams: KpiCategorySvcParams) {
    this._svcKPIDetailsDataParams = inputParams;
    const httpBody = {
      'display': this._svcKPIDetailsDataParams.display,
      'entityId': this._svcKPIDetailsDataParams.entityId,
      'entityLvl': this._svcKPIDetailsDataParams.entityLvl,
      'modality': this._svcKPIDetailsDataParams.modality,
      'rptDt': this._svcKPIDetailsDataParams.rptDt,
      'sortBy': this._svcKPIDetailsDataParams.sortBy
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    console.log(`getting KPI details data for KPIs in a Category for entity: ${this._svcKPIDetailsDataParams.entityId}
    level: ${this._svcKPIDetailsDataParams.entityLvl}
    modality: ${this._svcKPIDetailsDataParams.modality}
    report date: ${this._svcKPIDetailsDataParams.rptDt}
    display: ${this._svcKPIDetailsDataParams.display}
    sortBy: ${this._svcKPIDetailsDataParams.sortBy}`);

    // return this._http.get<KPIDetailsData[]>(environment.kPIDetailsApiUrl).pipe();
    return this._http.post<KPIDetailsData[]>(environment.kPIDetailsApiUrl, httpBody, httpOptions).pipe();
  }

}

export class KpiCategorySvcParams {
  display: number;
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;
  sortBy: number;
}
