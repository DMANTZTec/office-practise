import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KPIDetailsData } from '../../data/model';
import { environment } from '../../../environments/environment';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Injectable()
export class KpiSingleListService {
  private _kpiDetailsCache$: Observable<KPIDetailsData[]>;
  private _svcKPIDetailsDataParams: KpiSingleListSvcParams;

  constructor(private _http: HttpClient,
    private _breadcrumbSvc: BreadcrumbService) { }

  getKPIDetailsData(inputParams: KpiSingleListSvcParams) {
    if (!this._kpiDetailsCache$ || this._breadcrumbSvc.isParamChanged(this._svcKPIDetailsDataParams, inputParams)) {
      this._kpiDetailsCache$ = this.requestKPIDetailsData(inputParams).pipe();
    }
    return this._kpiDetailsCache$;
  }

  private requestKPIDetailsData(inputParams: KpiSingleListSvcParams) {
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

    console.log(`getting KPI details data for KPIS in a Single list for entity: ${this._svcKPIDetailsDataParams.entityId}
    level: ${this._svcKPIDetailsDataParams.entityLvl}
    modality: ${this._svcKPIDetailsDataParams.modality}
    report date: ${this._svcKPIDetailsDataParams.rptDt}
    display: ${this._svcKPIDetailsDataParams.display}
    sortBy:${this._svcKPIDetailsDataParams.sortBy}`);

    // return this._http.get<KPIDetailsData[]>(environment.kPIDetailsApiUrl).pipe();
    return this._http.post<KPIDetailsData[]>(environment.kPIDetailsApiUrl, httpBody, httpOptions).pipe();
  }

}

export class KpiSingleListSvcParams {
  display: number;
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;
  sortBy: number;
}
