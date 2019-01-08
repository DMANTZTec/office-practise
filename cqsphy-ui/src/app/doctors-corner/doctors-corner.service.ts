import { BreadcrumbService } from './../bread-crumb/bread-crumb.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { SummaryData } from '../data/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DoctorsCornerService {
  private _doctorsCornerCache$: Observable<SummaryData[]>;
  private _svcParams: DoctorsCornerSvcParams;

  constructor(private _http: HttpClient, private _breadcrumbService: BreadcrumbService) { }

  getDoctorsCornerData(inputParams: DoctorsCornerSvcParams) {
    if (!this._doctorsCornerCache$ || this._breadcrumbService.isParamChanged(this._svcParams, inputParams)) {
      this._doctorsCornerCache$ = this.requestDoctorsCornerData(inputParams).pipe();
    }
    return this._doctorsCornerCache$;
  }

  private requestDoctorsCornerData(inputParams: DoctorsCornerSvcParams) {
    console.log(`getting data from API service for Doctors Corner `);
    this._svcParams = inputParams;
    const httpBody = {
      'entityId': this._svcParams.entityId,
      'entityLvl': this._svcParams.entityLvl,
      'modality': this._svcParams.modality,
      'rptDt': this._svcParams.rptDt
    };
    // const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    // return  this._http.get<SummaryData[]>(environment.summaryApiUrl1).pipe();
    // console.log("sending req");
    // console.log(this._http.post<SummaryData[]>(environment.summaryApiUrl, httpBody, httpOptions).pipe());
    return this._http.post<SummaryData[]>(environment.summaryApiUrl, httpBody, httpOptions).pipe();
  }

}

export class DoctorsCornerSvcParams {
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;

}
