import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

import { shareReplay } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { KPIHeatMapDetail, OvertimeMonthLabels } from '../../data/model';

@Injectable()
export class PhysicianScoreOvertimeService {

  private _physicianCQSScoreCache$: Observable<KPIHeatMapDetail[]>;
  private _monthLabelsCache$: Observable<OvertimeMonthLabels>;

  private _svcParams: PhysicianScoreOvertimeSvcParams;
  constructor(private _http: HttpClient) { }

  getPhyCQSScoreData(inputParams: PhysicianScoreOvertimeSvcParams) {
    this._physicianCQSScoreCache$ = this.requestPhyCQSScoreData(inputParams).pipe(shareReplay(1));
    return this._physicianCQSScoreCache$;
  }

  getOvertimeMonthLabels(inputParams: PhysicianScoreOvertimeSvcParams) {
    this._monthLabelsCache$ = this.requestOvertimeMonthLabels(inputParams).pipe(shareReplay(1));
    return this._monthLabelsCache$;
  }

  private requestPhyCQSScoreData(inputParams: PhysicianScoreOvertimeSvcParams) {
    console.log(`getting data from API service for requestPhyCQSScoreData: `);
    this._svcParams = inputParams;
    const httpBody = {
      'modality': this._svcParams.modality
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    return  this._http.get<KPIHeatMapDetail[]>(environment.phyCqsScoreApiUrl).pipe();
    // return this._http.post<KPIHeatMapDetail[]>(environment.phyCqsScoreDataApiUrl, httpBody, httpOptions).pipe();
  }

  private requestOvertimeMonthLabels(inputParams: PhysicianScoreOvertimeSvcParams) {
    console.log(`getting data from API service for requestOvertimeMonthLabels: `);
    this._svcParams = inputParams;
    const httpBody = {
      'modality': this._svcParams.modality
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    return  this._http.get<OvertimeMonthLabels>(environment.overtimeMonthLabelsApiUrl).pipe();
    // return this._http.post<KPIHeatMapDetail[]>(environment.phyCqsScoreDataApiUrl, httpBody, httpOptions).pipe();
  }

}

export class PhysicianScoreOvertimeSvcParams {
  modality: string;
}
